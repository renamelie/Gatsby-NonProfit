import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { colors, media } from '../../utils/helpers'

import BGImg from '../../components/BGImg'
import Wrapper from '../../components/Wrapper'
import Button from '../../components/Button'

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
				style={{
					height: '100%',
					filter: 'opacity(40%) brightness(40%)',
				}}
			/>
			<Wrapper className="wrapper">
				<Button style={{ background: colors.white, color: colors.primary }}>
					Our impact
				</Button>
				<h1>
					We invest in a better tomorrow for the planet and all its people.
				</h1>
				<div className="items">
					<div className="item">
						<h2>50</h2>
						<p>million trees planted in deforested areas</p>
					</div>
					<div className="item">
						<h2>200</h2>
						<p>women employed in communities</p>
					</div>
					<div className="item">
						<h2>25,000</h2>
						<p>million trees planted in deforested areas</p>
					</div>
					<div className="item">
						<h2>150</h2>
						<p>women employed in communities</p>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}

export default styled(OurImpact)`
	position: relative;
	display: flex;
	justify-content: center;
	background-color: ${colors.primary};
	color: ${colors.white};
	z-index: 0;

	& .wrapper {
		text-align: center;
		max-width: 1400px;
	}

	& h1 {
		font-size: 20px;
		line-height: 26px;
		font-weight: 600;
		margin: 2rem 0;
	}

	& .items {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
		justify-content: center;
		align-items: center;
	}

	& .item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	& .item h2 {
		font-family: 'FloodStd', sans-serif;
		font-size: 44px;
		line-height: 46px;
	}

	& .item > * {
		max-width: 300px;
	}

	${media.small`
    & h1 {
      font-size: 36px;
      line-height: 46px;
		}

		& .items {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}

		& .item h2 {
			font-family: 'FloodStd', sans-serif;
			font-size: 72px;
			line-height: 76px;
		}
	`};

	${media.large`
		& h1 {
      font-size: 44px;
      line-height: 56px;
		}

		& .items {
			grid-template-columns: repeat(4, 1fr);
		}
  `};
`
