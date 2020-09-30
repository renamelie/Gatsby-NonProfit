import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { colors, media } from '../../utils/helpers'

import ButtonAbsolute from '../../components/ButtonAbsolute'
import ButtonLink from '../../components/ButtonLink'

const Img = styled(Image)`
	filter: grayscale(80%);
	width: 100%;
	height: 350px;

	${media.medium`
		width: 576px;
		height: 568px;
	`}

	${media.large`
		width: 640px;
	`}
`

const Text = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 100%;
	color: ${colors.white};

	& .bgBlue {
		background-color: ${colors.primary};
		margin-bottom: 1rem;
	}

	& .description,
	& .poste {
		margin: 1rem;
	}

	& .description {
		font-size: 20px;
		line-height: 26px;
		font-weight: 700;
	}

	& .poste {
		font-size: 11px;
		line-height: 13px;
	}

	${media.medium`
		position: absolute;
		bottom: 0;

		& .bgBlue {
			align-self: flex-end;
			width: 576px;
		}

		&	.description, .poste {
			margin: 2rem;
		}

		& .poste {
			font-size: 14px;
			line-height: 17px;
		}
	`}

	${media.bigMedium`
		align-items: flex-start;

		& .bgBlue {
			align-self: flex-start;
			width: 400px;
		}

		& .description {
			font-size: 28px;
			line-height: 36px;
		}
	`}
`

const Storie = ({ className, node }) => {
	return (
		<div className={className}>
			<div className="contentImg">
				<ButtonAbsolute>STORIES</ButtonAbsolute>
				<Img
					fluid={node.frontmatter.image.childImageSharp.fluid}
					alt="Storie"
				/>
			</div>
			<Text>
				<div className="bgBlue">
					<div className="description">"{node.frontmatter.description}"</div>
					<div className="poste">{node.frontmatter.poste}</div>
				</div>
				<ButtonLink to="/storie1">Read more</ButtonLink>
			</Text>
		</div>
	)
}

export default styled(Storie)`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem 0;
	height: 660px;
	max-width: 950px;
	min-height: 760px;

	.contentImg {
		flex: 1;
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
	}

	${media.smaller`
		min-height: 690px;
	`}

	${media.medium`
		height: 840px;

		.contentImg {
			justify-content: flex-start;
			margin-bottom: 0;
		}
	`}

	${media.bigMedium`
		/* flex-direction: row; */
		height: 610px;

		.contentImg {
			justify-content: flex-end;
		}
	`}
`
