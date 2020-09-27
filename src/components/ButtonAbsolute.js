import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const ButtonAbsolute = ({ className, children }) => {
	return (
		<div className={className}>
			<Button>{children}</Button>
		</div>
	)
}

export default styled(ButtonAbsolute)`
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: center;
	top: -20px;
	z-index: 2;
`
