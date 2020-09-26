import React, { useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { colors, media } from '../../utils/helpers'

import ButtonAbsolute from '../../components/ButtonAbsolute'

const Img = styled(Image)``

const Storie = ({ className, children, image }) => {
	const data = useStaticQuery(graphql`
		query Storie {
			allFile(
				filter: {
					extension: { regex: "/(jpg)|(jpeg)|(png)/" }
					relativeDirectory: { eq: "images" }
				}
			) {
				edges {
					node {
						id
						name
						childImageSharp {
							fluid(maxWidth: 800, quality: 100) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	`)

	const match = useMemo(
		() => data.allFile.edges.find(({ node }) => image === node.name),
		[data, image]
	)
	// console.log(data.allFile.edges.node)

	return (
		<div className={className}>
			<div className="contentImg">
				<ButtonAbsolute>STORIES</ButtonAbsolute>
				{/* <Image fluid={match.node.childImageSharp.fluid} alt="Stories" /> */}
			</div>
			<div className="contentText">{children}</div>
		</div>
	)
}

export default styled(Storie)`
	border: 2px solid blue;
	padding: 1rem 0;

	.contentImg {
		border: 2px solid pink;
		position: relative;
	}

	.contentText {
		border: 2px solid purple;
	}
`
