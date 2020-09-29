import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { colors, media } from '../utils/helpers'
import { FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { TiSocialInstagram } from 'react-icons/ti'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Wrapper from '../components/Wrapper'

const News = ({ data, location, className }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="News" />
			<div className={className}>
				<Wrapper className="wrapper">
					<header>
						<h1 className="flood">Latest post</h1>
						<div className="follow">
							<p>Follow us</p>
							<div className="icons">
								<a href="google.fr" target="_blank" rel="noopener noreferrer">
									<FaFacebookF />
								</a>
								<a href="google.fr" target="_blank" rel="noopener noreferrer">
									<FaYoutube />
								</a>
								<a href="google.fr" target="_blank" rel="noopener noreferrer">
									<TiSocialInstagram />
								</a>
								<a href="google.fr" target="_blank" rel="noopener noreferrer">
									<FaTwitter />
								</a>
							</div>
						</div>
					</header>
					<main>
						<div className="contentText">
							<h2>This is the title for the latest blog post this long</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
								quis scelerisque lectus. Aliquam ullamcorper feugiat urna ut
								bibendum. Nulla eu erat sed ipsum. Lorem ipsum.
							</p>
							<p className="more">
								<Link to="/">
									Read more about this environmental and social cause
								</Link>
							</p>
						</div>
						<div className="contentImg">
							<Img
								fluid={data.photo.childImageSharp.fluid}
								alt="News"
								style={{
									maxHeight: '416px',
									height: '100%',
									filter: 'opacity(80%) grayscale(80%)',
								}}
							/>
						</div>
					</main>
				</Wrapper>
			</div>
		</Layout>
	)
}

export default styled(News)`
	background-color: ${colors.primary};
	color: ${colors.white};

	& .follow p {
		text-transform: uppercase;
		padding-bottom: 0.5rem;
	}

	& .icons {
		display: flex;
		flex-direction: row;
		gap: 1.5rem;
	}

	& .icons a {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${colors.accent};
		border-radius: 50%;
		height: 32px;
		width: 32px;
	}

	& .icons svg {
		font-size: 13px;
		margin: 5px;
	}

	& .wrapper > * {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	& .wrapper > * > * {
		flex: 1;
	}

	& .wrapper header {
		margin-bottom: 2rem;
	}

	& main .contentText {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: ${colors.accent};
		color: ${colors.primary};
	}

	& main .contentText > * {
		margin: 1rem;
	}

	& main .contentText p:first-child {
		font-size: 18px;
		line-height: 28px;
		font-weight: 600;
	}

	& main .contentText .more {
		font-size: 11px;
		text-decoration: underline;
	}

	${media.smaller`
		& main .contentText p:first-child {
			font-size: 22px;
			line-height: 32px;
		}
	`}

	${media.medium`
		& .wrapper > * {
			flex-direction: row;
		}

    & main .contentText p:first-child {
      font-size: 30px;
      line-height: 46px;
    }

    & main .contentText .more {
      font-size: 16px;
		}
  `}

	${media.large`
		& main .contentText p:first-child {
      font-size: 40px;
      line-height: 56px;
    }
  `}
`

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		photo: file(absolutePath: { regex: "/News.jpg/" }) {
			childImageSharp {
				fluid(maxWidth: 544, quality: 80) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
