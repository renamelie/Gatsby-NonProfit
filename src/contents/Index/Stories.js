import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Wrapper from '../../components/Wrapper'
import Storie from './Storie'

const Stories = ({ className }) => {
	const data = useStaticQuery(graphql`
		query Stories {
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				filter: { frontmatter: { posttype: { eq: "stories" } } }
			) {
				edges {
					node {
						excerpt
						fields {
							slug
						}
						frontmatter {
							title
							description
							posttype
							poste
							name
							image {
								childImageSharp {
									fluid(maxWidth: 640, quality: 100) {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
					}
				}
			}
		}
	`)

	const posts = data.allMarkdownRemark.edges

	var settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// adaptiveHeight: true,
	}

	return (
		<div className={className}>
			<Wrapper>
				<Slider className="slider" {...settings}>
					{posts.map(({ node }) => {
						return <Storie node={node} key={node.fields.slug} />
					})}
				</Slider>
			</Wrapper>
		</div>
	)
}

export default styled(Stories)``
