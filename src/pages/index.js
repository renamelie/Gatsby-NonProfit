import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TheIssue from '../components/TheIssue'
import BlockText from '../components/BlockText'
import TakeAction from '../contents/Index/TakeAction'
import WhatWeDo from '../contents/Index/WhatWeDo'
import DidYouKnow from '../contents/Index/DidYouKnow'
import Stories from '../contents/Index/Stories'
import EventNews from '../contents/Index/EventNews'

const BlogIndex = ({ data, location, className }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="Home" />
			<div className={className}>
				<TheIssue image="Banner">
					<BlockText to={true}>
						Climate change poses the biggest threat to women in developing
						nations.
					</BlockText>
				</TheIssue>
				<TakeAction />
				<WhatWeDo />
				<DidYouKnow />
				<Stories />
				<EventNews />
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
