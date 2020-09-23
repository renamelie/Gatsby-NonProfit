import React from 'react'
import GlobalStyle from './src/utils/GlobalStyle'

export const wrapPageElement = ({ element }) => {
	return (
		<>
			{element}
			<GlobalStyle />
		</>
	)
}
