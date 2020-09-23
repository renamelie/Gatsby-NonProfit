import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TheIssue from '../contents/Index/TheIssue'
import TakeAction from '../contents/Index/TakeAction'
import WhatWeDo from '../contents/Index/WhatWeDo'
import DidYouKnow from '../contents/Index/DidYouKnow'

const BlogIndex = ({ data, location, className }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="Home" />
			<div className={className}>
				<TheIssue />
				<TakeAction />
				<WhatWeDo />
				<DidYouKnow />
			</div>
		</Layout>
	)
}

export default styled(BlogIndex)``

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
