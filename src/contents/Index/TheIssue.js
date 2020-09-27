import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { colors, media } from '../../utils/helpers'

import LogoStop from '../../components/LogoStop'
import BGImg from '../../components/BGImg'
import Wrapper from '../../components/Wrapper'
import BlockText from './BlockText'

const TheIssue = ({ className }) => {
	const data = useStaticQuery(graphql`
		query TheIssue {
			banner: file(absolutePath: { regex: "/Banner.jpg/" }) {
				childImageSharp {
					fluid(maxWidth: 1920, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<div className={className}>
			<BGImg
				fluid={data.banner.childImageSharp.fluid}
				alt="Stop Climate Change"
				style={{ minHeight: '600px', height: '600px' }}
			/>
			<Wrapper className="wrapper">
				<LogoStop className="logoStop" color="white" />
				<BlockText />
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
