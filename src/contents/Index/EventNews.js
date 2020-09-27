import React, { useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { colors, media } from '../../utils/helpers'

import Wrapper from '../../components/Wrapper'
import ButtonAbsWhite from '../../components/ButtonAbsWhite'
import ButtonLink from '../../components/ButtonLink'
import Paragraphe from '../../components/Paragraphe'

const Img = styled(Image)`
	filter: grayscale(80%);
	width: 312px;
	height: 312px;

	${media.bigMedium`
    width: 420px;
    height: 420px;
  `}

	${media.large`
    width: 576px;
    height: 576px;
  `}
`
const Article = ({ children, button, image, title }) => {
	const data = useStaticQuery(graphql`
		query ArticleQuery {
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
							fluid(maxWidth: 576, quality: 80) {
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
		<article>
			<div className="contentImg">
				<ButtonAbsWhite>{button}</ButtonAbsWhite>
				<Img fluid={match.node.childImageSharp.fluid} alt="Event and news" />
			</div>
			<div className="contentText">
				<Paragraphe title={title}>{children}</Paragraphe>
				<ButtonLink to="/news">Read more</ButtonLink>
			</div>
		</article>
	)
}

const EventNews = ({ className }) => {
	return (
		<div className={className}>
			<Wrapper style={{ padding: '3rem 0 1rem' }}>
				<h1 className="title flood">
					Let's take action now to save the future.
				</h1>
				<Article
					button="Event"
					image="EventNews1"
					title="Earth Day 2018 community
tree planting event"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
					felis, auctor vitae vestibulum vel, consequat eu dolor. Nam
					pellentesque euismod laoreet. Aliquam sed nisl porttitor nisl laoreet
					semper nec iaculis nibh. Curabitur in tortor lorem.
				</Article>
				<Article
					button="Latest news"
					image="EventNews2"
					title="Earth Day 2018 community
tree planting event"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
					felis, auctor vitae vestibulum vel, consequat eu dolor. Nam
					pellentesque euismod laoreet. Aliquam sed nisl porttitor nisl laoreet
					semper nec iaculis nibh. Curabitur in tortor lorem.
				</Article>
			</Wrapper>
		</div>
	)
}

export default styled(EventNews)`
	background-color: ${colors.primary};
	color: ${colors.white};
	text-align: center;

	& .title {
		margin-bottom: 1rem;
	}

	& article {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem 0;
	}

	& .contentImg {
		position: relative;
		display: flex;
		justify-content: center;
	}

	& .contentText {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1rem;
	}

	& .contentText > * {
		margin: 1rem 0;
	}

	${media.medium`
    text-align: left;

    & .title {
      max-width: 550px;
      margin-bottom: 2rem;
    }

    & .contentText {
      margin: 0 2rem;
    }

    & article {
      flex-direction: row;
    }

    & article:nth-child(odd) .contentImg {
      order: 2;
    }
  `}
`
