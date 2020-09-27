import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/helpers'
import { Link } from 'gatsby'

const Logo = ({ title, className }) => {
	return (
		<div className={className}>
			<Link to="/">{title}</Link>
		</div>
	)
}

export default styled(Logo)`
	display: flex;
	flex-direction: column;
	font-size: 18px;
	line-height: 1.5rem;
	font-weight: 500;

	& a {
		width: 130px;
	}

	${media.medium`
    font-size: 22px;

    & a {
      width: 160px;
    }
  `};
`
