import React, { useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { colors, media } from '../utils/helpers'

import Paragraphe from './Paragraphe'
import ButtonLink from './ButtonLink'

const BGImg = styled(Image)`
	position: absolute !important;
	top: 0;
	width: 100%;
	z-index: 2;
	filter: grayscale(80%);

	width: 248px;
	height: 176px;

	${media.smaller`
    width: 320px;
    height: 224px;
 `}

	@media (min-width: 768px) and (max-width: 1200px) {
		top: 22%;
		left: -70px;
	}
`

const BlockImg = ({ className, title, image, children }) => {
	const data = useStaticQuery(graphql`
		query BlockImg {
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
							fluid(maxWidth: 1920, quality: 100) {
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

	// console.log(match)

	return (
		<div className={className}>
			<div className="BGColor"></div>
			<BGImg fluid={match.node.childImageSharp.fluid} alt="What We Do" />
			<div className="content">
				<Paragraphe title={title}>{children}</Paragraphe>
				<ButtonLink to="/">Read more</ButtonLink>
			</div>
		</div>
	)
}

export default styled(BlockImg)`
	position: relative;
	display: flex;
	justify-content: center;
	padding: 2rem;
	z-index: 1;
	min-height: 550px;
	max-width: 500px;
	text-align: center;

	.BGColor {
		position: absolute;
		background: ${colors.white};
		width: 100%;
		height: 90%;
		bottom: 0;
		left: 0;
		z-index: -1;
	}

	& .content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		margin-top: 176px;
	}

	${media.smaller`
  	&	.content {
			margin-top: 224px;
			text-align: left;
    }
	`}

	@media (min-width: 768px) and (max-width: 1200px) {
		min-height: 400px;
		max-width: 80%;

		& .content {
			margin-top: 0;
			margin-left: 50%;
		}

		.BGColor {
			width: 100%;
			height: 100%;
			bottom: 0;
			right: 0;
			left: 60px;
		}

		& .content {
			/* border: 2px solid purple; */
		}
	}

	${media.large`
    min-height: 550px;
  `}
`
