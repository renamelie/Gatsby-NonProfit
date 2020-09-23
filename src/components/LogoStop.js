import React from 'react'
import styled from 'styled-components'

const LogoStop = ({ className, color }) => {
	return (
		<div className={className} style={{ color: color }}>
			<span>#Stop</span>
			<span>climate</span>
			<span>change</span>
		</div>
	)
}

export default styled(LogoStop)`
	display: flex;
	flex-direction: column;
	font-family: 'FloodStd', sans-serif;
	font-size: 44px;
	line-height: 46px;
`
