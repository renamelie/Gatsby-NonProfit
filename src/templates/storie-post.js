import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { colors, media } from '../utils/helpers'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Wrapper from '../components/Wrapper'

const StoriePostTemplate = ({ data, pageContext, location, className }) => {
	const list = data.allMarkdownRemark.edges
	const post = data.markdownRemark
	const siteTitle = data.site.siteMetadata.title
	const { previous, next } = pageContext

	console.log(list)

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<article className={className}>
				<Wrapper className="wrapper">
					<header>
						<h1 className="flood">Storie of ourwork</h1>
						<div className="container">
							<div className="contentText">
								{list.map(({ node }) => (
									<Link
										key={node.frontmatter.title}
										activeClassName="active"
										to={node.fields.slug}
									>
										<span>
											{node.frontmatter.title}, {node.frontmatter.country}
										</span>
									</Link>
								))}
							</div>
							<div className="contentImg">
								<Img
									fluid={post.frontmatter.image.childImageSharp.fluid}
									alt="Storie"
									style={{ minHeight: '300px', height: '400px' }}
								/>
							</div>
						</div>
						{/* <p>{post.frontmatter.title}</p> */}
					</header>
					{/* <section dangerouslySetInnerHTML={{ __html: post.html }} /> */}
					<hr />
					<nav className="blog-post-nav">
						<ul
							style={{
								display: `flex`,
								flexWrap: `wrap`,
								justifyContent: `space-between`,
								listStyle: `none`,
								padding: 0,
							}}
						>
							<li>
								{previous && (
									<Link to={previous.fields.slug} rel="prev">
										← {previous.frontmatter.title}
									</Link>
								)}
							</li>
							<li>
								{next && (
									<Link to={next.fields.slug} rel="next">
										{next.frontmatter.title} →
									</Link>
								)}
							</li>
						</ul>
					</nav>
				</Wrapper>
			</article>
		</Layout>
	)
}

export default styled(StoriePostTemplate)`
	display: flex;
	justify-content: center;
	background-color: ${colors.primary};
	color: ${colors.white};

	& .active span {
		background-color: ${colors.accent};
		color: ${colors.primary};
	}

	& .wrapper {
		max-width: 1400px;
		width: 100%;
	}

	& header h1 {
		text-align: center;
		margin-bottom: 2rem;
		font-size: 32px;
		line-height: 40px;
	}

	& header .container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	& header .contentText {
		flex: 1;
	}

	& header .contentImg {
		flex: 2;
	}

	& header span {
		display: flex;
		text-transform: uppercase;
		font-size: 14px;
		line-height: 30px;
		font-weight: 500;
		padding: 1rem;
	}

	& a {
		color: ${colors.white};
	}

	& blockquote {
		background-color: ${colors.white};
		color: ${colors.primary};
		margin: 0;
	}

	${media.medium`
		& header h1 {
			text-align: left;
		}

		& header .container {
			flex-direction: row;
		}

		& header h1 {
			font-size: 44px;
			line-height: 46px;
		}
	`}

	${media.large`
	`}
`

export const pageQuery = graphql`
	query StoriePostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { posttype: { eq: "stories" } } }
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						country
					}
				}
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				country
				image {
					childImageSharp {
						fluid(maxWidth: 640, quality: 80) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	}
`
