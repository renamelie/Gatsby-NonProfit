import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TheIssue from '../contents/Index/TheIssue'
import TakeAction from '../contents/Index/TakeAction'
import WhatWeDo from '../contents/Index/WhatWeDo'
import DidYouKnow from '../contents/Index/DidYouKnow'
import Stories from '../contents/Index/Stories'
import EventNews from '../contents/Index/EventNews'
import Subscribe from '../contents/Index/Subscribe'

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
				<Stories />
				<EventNews />
				<Subscribe />
			</div>
		</Layout>
	)
}

export default styled(BlogIndex)`
	display: flex;
	flex-direction: column;
`

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
