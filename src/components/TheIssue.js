import React, { useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { colors, media } from '../utils/helpers'

import LogoStop from './LogoStop'
import BGImg from './BGImg'
import Wrapper from './Wrapper'

const TheIssue = ({ className, image, children }) => {
	const data = useStaticQuery(graphql`
		query TheIssue {
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
							fluid(maxWidth: 1920, quality: 80) {
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

	return (
		<div className={className}>
			<BGImg
				fluid={match.node.childImageSharp.fluid}
				alt="Stop Climate Change"
				style={{ minHeight: '600px', height: '600px' }}
			/>
			<Wrapper className="wrapper">
				<LogoStop className="logoStop" color="white" />
				{children}
			</Wrapper>
		</div>
	)
}

export default styled(TheIssue)`
	height: 600px;
	min-height: 600px;
	position: relative;
	background-color: ${colors.accent};
	z-index: 0;

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		/* height: 90%; */
		height: 100%;
		min-height: 310px;
	}

	.wrapper > * {
		flex: 1;
	}

	.logoStop {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	${media.medium`
    .logoStop {
      font-size: 50px;
      line-height: 56px;
    }
  `};

	${media.bigMedium`
    .wrapper {
      flex-direction: row;
    }

    .logoStop {
      order: 2;
      font-size: 72px;
      line-height: 76px;
    }
  `};
`
