const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions

	// Define a template for blog post
	const blogPost = path.resolve(`./src/templates/blog-post.js`)
	const storiePost = path.resolve(`./src/templates/storie-post.js`)

	// Get all markdown blog posts sorted by date
	const result = await graphql(
		`
			{
				allMarkdownRemark(
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 1000
				) {
					nodes {
						fields {
							slug
						}
						frontmatter {
							title
							posttype
						}
					}
				}
			}
		`
	)

	if (result.errors) {
		reporter.panicOnBuild(
			`There was an error loading your posts`,
			result.errors
		)
		return
	}

	const posts = result.data.allMarkdownRemark.nodes
	console.log(result)

	const blogEdges = posts.filter(node => node.frontmatter.posttype === `blog`)
	const storieEdges = posts.filter(
		node => node.frontmatter.posttype === `stories`
	)

	// Create blog posts pages
	// But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
	// `context` is available in the template as a prop and as a variable in GraphQL

	if (posts.length > 0) {
		storieEdges.forEach((post, index) => {
			createPage({
				path: post.fields.slug,
				component: storiePost,
				context: {
					slug: post.fields.slug,
				},
			})
		})

		blogEdges.forEach((post, index) => {
			const previous =
				index === blogEdges.length - 1 ? null : blogEdges[index + 1]
			const next = index === 0 ? null : blogEdges[index - 1]

			createPage({
				path: post.fields.slug,
				component: blogPost,
				context: {
					slug: post.fields.slug,
					previous,
					next,
				},
			})
		})
	}
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode })

		createNodeField({
			name: `slug`,
			node,
			value,
		})
	}
}

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions

	// Explicitly define the siteMetadata {} object
	// This way those will always be defined even if removed from gatsby-config.js

	// Also explicitly define the Markdown frontmatter
	// This way the "MarkdownRemark" queries will return `null` even when no
	// blog posts are stored inside "content/blog" instead of returning an error
	createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
