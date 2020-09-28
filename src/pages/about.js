import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TheIssue from '../components/TheIssue'
import BlockText from '../components/BlockText'
import MissionValues from '../contents/About/MissionValues'
import OurTeam from '../contents/About/OurTeam'
import OurImpact from '../contents/About/OurImpact'

const About = ({ data, location, className }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="About" />
			<div className={className}>
				<TheIssue image="BannerAbout">
					<BlockText>
						We are an environmental organization that empowers communities,
						particularly women.
					</BlockText>
				</TheIssue>
				<MissionValues />
				<OurTeam />
				<OurImpact />
			</div>
		</Layout>
	)
}

export default styled(About)`
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
