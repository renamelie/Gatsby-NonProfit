import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../utils/helpers'

const ButtonStyle = styled(GatsbyLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 160px;
	height: 40px;
	color: ${colors.primary};
	background-color: ${colors.accent};
	border-radius: 20px;
	cursor: pointer;

	& p {
		flex: 1;
		font-size: 16px;
		font-weight: 500;
	}
`

const ButtonLink = ({ children, to }) => {
	return (
		<ButtonStyle to={to}>
			<p>{children}</p>
		</ButtonStyle>
	)
}

export default ButtonLink
