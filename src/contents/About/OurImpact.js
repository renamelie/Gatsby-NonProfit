import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BGImg from '../../components/BGImg'
import { colors } from '../../utils/helpers'

const OurImpact = ({ className }) => {
	const data = useStaticQuery(graphql`
		query OurImpactQuery {
			photo: file(absolutePath: { regex: "/Impact.jpg/" }) {
				childImageSharp {
					fluid(maxWidth: 1920, quality: 80) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`)

	return (
		<div className={className}>
			<BGImg
				fluid={data.photo.childImageSharp.fluid}
				alt="Our impact"
				style={{ minHeight: '600px', filter: 'opacity(40%) brightness(40%)' }}
			/>
		</div>
	)
}

export default styled(OurImpact)`
	position: relative;
	background-color: ${colors.primary};
	min-height: 600px;
	z-index: 0;
`
