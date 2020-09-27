import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/helpers'

import Button from './Button'

const ButtonAbsWhite = ({ className, children }) => {
	return (
		<div className={className}>
			<Button>{children}</Button>
		</div>
	)
}

export default styled(ButtonAbsWhite)`
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: center;
	top: -20px;
	z-index: 2;

	& > * {
		color: ${colors.primary};
		background-color: ${colors.white};
	}
`
