import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/helpers'

const success = ({ className }) => {
	return (
		<div className={className}>
			<div>
				<p>Thank you!</p>
				<p>
					<a href="/">back</a>
				</p>
			</div>
		</div>
	)
}

export default styled(success)`
	display: flex;
	width: 100vw;
	height: 100vh;

	& div {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		width: 75%;
		max-width: 400px;
		height: 200px;
		margin: auto;
		padding: 1rem;
		background-color: white;
		border-radius: 20px;
		font-family: Montserrat, sans-serif;
		font-weight: 700;
		color: ${colors.primary};
	}

	& p {
		font-size: 2rem;
		margin: 0;
	}

	& a {
		display: flex;
		align-items: center;
		text-decoration: none;
		box-shadow: none;
		font-size: 1rem;
		font-weight: 600;
		color: ${colors.primary};
	}

	& a:hover {
		color: pink;
	}

	& svg {
		font-size: 2rem;
		margin: 0 20px;
	}

	.arrow {
		animation: slide 2s ease-in-out infinite;
		margin-left: 9px;
	}
`
