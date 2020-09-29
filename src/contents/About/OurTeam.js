import React, { useMemo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { colors, media } from '../../utils/helpers'

import Wrapper from '../../components/Wrapper'
import Button from '../../components/Button'
import Paragraphe from '../../components/Paragraphe'

const Img = styled(Image)`
	filter: grayscale(80%);
	height: 250px;

	${media.medium`
		height: 350px;
		margin: 0 2rem 2rem 0;
  `}

	${media.large`
		height: 400px;
  `}
`

const Person = ({ children, image }) => {
	const data = useStaticQuery(graphql`
		query Person {
			allFile(
				filter: {
					extension: { regex: "/(jpg)|(jpeg)|(png)/" }
					relativeDirectory: { eq: "team" }
				}
			) {
				edges {
					node {
						id
						name
						childImageSharp {
							fluid(maxWidth: 320, quality: 80) {
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
		<div className="person">
			<Img fluid={match.node.childImageSharp.fluid} alt={children} />
			<div className="details">{children}</div>
		</div>
	)
}

const OurTeam = ({ className }) => {
	return (
		<div className={className}>
			<Wrapper className="wrapper">
				<Button style={{ background: colors.primary, color: colors.white }}>
					Our team
				</Button>
				<Paragraphe
					className="para"
					title="Meet the team of people making it happen."
				>
					Our leaders set our global direction, goals and strategies, and
					support nearly 500 team members working in more than 20 countries
					around the world.
				</Paragraphe>
				<div className="team">
					<Person image="MichaelDamm">Michael Damm, Community Manager</Person>
					<Person image="TamaraBellis">Tamara Bellis, Photographe</Person>
					<Person image="LeslyJuarez">Lesly Juarez, Manager</Person>
					<Person image="CharlesDeluvio">Charles Deluvio, Designer</Person>
					<Person image="KimsonDoan">Kimson Doan, Multi</Person>
					<Person image="BenParker">Ben Parker, Multi</Person>
				</div>
			</Wrapper>
		</div>
	)
}

export default styled(OurTeam)`
	display: flex;
	justify-content: center;
	text-align: center;

	& .wrapper {
		max-width: 1400px;
	}

	& .para {
		margin: 2rem 0;
	}

	& .team {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}

	& .person {
		position: relative;
		min-height: 320px;
	}

	& .person .details {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${colors.primary};
		color: ${colors.white};
		font-size: 14px;
		line-height: 20px;
		padding: 0.5rem;
		height: 70px;
		width: 100%;
	}

	${media.medium`
    text-align: left;

    & .para {
      display: flex;
      flex-direction: row;
		}

		& .para h2 {
			flex: 2;
		}

		& .para p {
			flex: 3;
		}

		& .team {
			grid-gap: 2rem;
		}

		& .person .details {
			width: calc(100% - 2rem);
			margin: 0 0 2rem 2rem;
			bottom: -1rem;
		}
  `}

	${media.large`
		& .team {
      grid-template-columns: 1fr 1fr 1fr;
    }

    & .person .details {
      font-size: 16px;
      line-height: 24px;
      padding: 1rem;
    }
  `}
`
