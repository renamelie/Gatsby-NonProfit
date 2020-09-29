import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import LogoStop from '../components/LogoStop'
import { media, colors } from '../utils/helpers'

const Footer = ({ className, title }) => {
	return (
		<footer className={className}>
			<div className="logo">
				<Logo title={title} />
			</div>
			<div className="content">
				<div className="li">
					<h1>Contact Us</h1>
					<span>123 Anywhere St.</span>
					<span>Cityname, NY 11206</span>
					<span>(123) 456-7890</span>
					<span>contact@npo.org</span>
				</div>
				<div className="li">
					<h1>Follow Us</h1>
					<span>The issue</span>
					<span>How we help</span>
					<span>Get involved</span>
					<span>Latest news</span>
				</div>
				<div className="li">
					<h1>Learn More</h1>
					<span>Facebook</span>
					<span>Twitter</span>
					<span>Instagram</span>
					<span>Medium</span>
				</div>
				<LogoStop color={colors.primary} />
			</div>
		</footer>
	)
}

export default styled(Footer)`
	display: flex;
	flex-direction: column;

	position: relative;
	width: calc(100vw - 2 * 8vw);
	left: 8vw;

	.logo {
		flex: 1;
		margin: 2em 0;
	}

	.content {
		flex: 4;
		display: grid;
		grid-template-columns: 1fr;
	}

	.content > div {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h1 {
		font-size: 14px;
		font-weight: 500;
		text-transform: uppercase;
		border-bottom: 2px solid black;
		padding: 10px 0;
		margin: 10px 0;
		width: 150px;
	}

	.li {
		font-size: 12px;
	}

	${media.small`
		flex-direction: column;

		.content {
			grid-template-columns: 1fr 1fr;
		}
	`};

	${media.bigMedium`
		flex-direction: row;

		.content {
			grid-template-columns: 1fr 1fr;
		}
  `};

	${media.extraLarge`
		.content {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
  `};
`
