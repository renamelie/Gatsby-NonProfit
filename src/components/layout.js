import React from 'react'
import styled from 'styled-components'

import Header from '../contents/Header'
import Footer from '../contents/Footer'
import Subscribe from '../components/Subscribe'
import './layout.css'

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`

const Layout = ({ location, title, children }) => {
	return (
		<Container>
			<Header title={title} />
			<main>{children}</main>
			<Subscribe />
			<Footer title={title} />
		</Container>
	)
}

export default Layout
