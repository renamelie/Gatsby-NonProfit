import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/helpers'

const Logo = ({ title, className }) => {
	return (
		<div className={className}>
			<span>{title}</span>
		</div>
	)
}

export default styled(Logo)`
	display: flex;
	flex-direction: column;
	font-size: 18px;
	line-height: 1.5rem;
	font-weight: 500;

	& span {
		width: 130px;
	}

	${media.medium`
    font-size: 22px;

    & span {
      width: 160px;
    }
  `};
`
