import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/helpers'
import ButtonAbsolute from './ButtonAbsolute'
import { Link } from 'gatsby'

const BlockText = ({ className, children, to }) => {
	return (
		<div className={className}>
			<ButtonAbsolute>THE ISSUE</ButtonAbsolute>
			<div className="container">
				<p>{children}</p>
				{to && (
					<p className="more">
						<Link to="/">
							Read more about this environmental and social cause
						</Link>
					</p>
				)}
			</div>
		</div>
	)
}

export default styled(BlockText)`
	position: relative;

	& .container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		gap: 1rem;
		background-color: white;
		height: 100%;
		max-height: 500px;
		padding: 2rem;
	}

	& .container p:first-child {
		font-size: 18px;
		line-height: 28px;
		font-weight: 600;
	}

	& .container .more {
		font-size: 11px;
		text-decoration: underline;
	}

	${media.smaller`
		& .container p:first-child {
			font-size: 22px;
			line-height: 32px;
		}
	`}

	${media.small`
    & .container p:first-child {
      font-size: 30px;
      line-height: 46px;
    }

    & .container .more {
      font-size: 16px;
    }
  `}

	${media.large`
    & .container p:first-child {
      font-size: 40px;
      line-height: 56px;
    }
  `}
`
