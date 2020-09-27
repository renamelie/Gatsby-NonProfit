import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { colors, media } from '../../utils/helpers'

import BlockIcons from '../../components/BlockIcons'
import BGImg from '../../components/BGImg'
import Wrapper from '../../components/Wrapper'
import ButtonLink from '../../components/ButtonLink'

const DidYouKnow = ({ className }) => {
	const data = useStaticQuery(graphql`
		query DYK {
			photo: file(absolutePath: { regex: "/WP1.jpg/" }) {
				childImageSharp {
					fluid(maxWidth: 1920, quality: 100) {
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
				alt="Did You Know"
				style={{ minHeight: '500px', height: '100%' }}
			/>
			<Wrapper className="wrapper">
				<div className="title">
					<h1 className="flood">Climate change is a hunger issue.</h1>
					<ButtonLink to="/">Take action</ButtonLink>
				</div>
				<div className="knows">
					<BlockIcons
						title="3 out of 4"
						twitter="https://www.google.com/"
						facebook="https://www.google.com/"
						abs={true}
					>
						People living in poverty depend on agriculture for survival.
					</BlockIcons>
					<BlockIcons
						title="100 millions +"
						twitter="https://www.google.com/"
						facebook="https://www.google.com/"
					>
						People living in poverty due to climate change by 2030
					</BlockIcons>
					<BlockIcons
						title="30%"
						twitter="https://www.google.com/"
						facebook="https://www.google.com/"
					>
						How high crop yield losses could go by the year 2080
					</BlockIcons>
					<BlockIcons
						title="200 millions +"
						twitter="https://www.google.com/"
						facebook="https://www.google.com/"
					>
						Refugees dealing with food shortages by the year 2050
					</BlockIcons>
				</div>
			</Wrapper>
		</div>
	)
}

export default styled(DidYouKnow)`
	position: relative;
	background-color: ${colors.accent};
	min-height: 500px;
	z-index: 0;

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
	}

	.wrapper h1 {
		color: ${colors.white};
		font-size: 44px;
		line-height: 46px;
		margin-bottom: 1rem;
	}

	.wrapper .title {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		min-height: 270px;
	}

	.knows {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.knows > div:first-child {
		position: relative;
	}

	${media.small`
    .wrapper {
			flex-direction: row;
    }
  `}
`
