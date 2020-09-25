import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Wrapper from '../../components/Wrapper'
import Storie from './Storie'

const Stories = ({ className }) => {
	var settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		// adaptiveHeight: true,
	}
	return (
		<div className={className}>
			<Wrapper>
				<Slider className="slider" {...settings}>
					<Storie image="Storie1">Ams</Storie>
					<Storie image="Storie2">Bams</Storie>
					<Storie image="Storie3">Cajms</Storie>
				</Slider>
			</Wrapper>
		</div>
	)
}

export default styled(Stories)`
	.slider {
		/* border: 2px solid blue; */
	}
`
