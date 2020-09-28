import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/helpers'

const Paragraphe = ({ className, children, title }) => {
	return (
		<div className={className}>
			<h2>{title}</h2>
			<p>{children}</p>
		</div>
	)
}

export default styled(Paragraphe)`
	& h2 {
		font-size: 14px;
		margin-bottom: 0.5rem;
	}

	& p {
		font-size: 12px;
		line-height: 20px;
	}

	${media.smaller`
    & h2 {
      font-size: 22px;
      margin-bottom: 1rem;
    }

    & p {
      font-size: 14px;
      line-height: 22px;
    }
  `};

	${media.large`
    & h2 {
      font-size: 26px;
    }

    & p {
      font-size: 16px;
      line-height: 24px;
    }
  `};
`
