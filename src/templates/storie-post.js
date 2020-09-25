import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const StoriePostTemplate = ({ data, pageContext, location, className }) => {
	const post = data.markdownRemark
	const siteTitle = data.site.siteMetadata.title
	const { previous, next } = pageContext

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<article className={className}>
				<header>
					<h1>{post.frontmatter.title}</h1>
					<p>{post.frontmatter.date}</p>
				</header>
				<section dangerouslySetInnerHTML={{ __html: post.html }} />
				<hr />
				<footer></footer>
			</article>
		</Layout>
	)
}

export default styled(StoriePostTemplate)`
	margin: 1rem;
`

export const pageQuery = graphql`
	query StoriePostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
			}
		}
	}
`
