import { createGlobalStyle } from 'styled-components'
import { pxToRem, colors } from './helpers'

const Global = createGlobalStyle`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		/* transition: all 0.5s; */
	}

	:root {
		overscroll-behavior-x: none;
		font-size: ${pxToRem(18)};
	}

  body {
		position: relative;
		display: flex;
		justify-content: center;
    font-family: 'Montserrat', sans-serif;
		background: white;
		color: ${colors.primary};
  }

	button {
	outline: none;
	border: none;
	background-color: transparent;
}

  a {
    text-decoration: none;
		box-shadow: none;
		color: ${colors.primary};
  }

	h1, h2, h3, h4, h5, h6, p {
    margin: 0;
	}

	.flood {
		font-family: 'FloodStd', sans-serif;
	}
`

export default Global
