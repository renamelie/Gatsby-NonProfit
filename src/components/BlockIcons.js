import React from 'react'
import styled from 'styled-components'
import ButtonAbsolute from './ButtonAbsolute'
import { colors, media } from '../utils/helpers'
import { FaTwitter, FaFacebookF } from 'react-icons/fa'

import Paragraphe from '../components/Paragraphe'

const BlockIcons = ({ className, children, title, twitter, facebook, abs }) => {
	return (
		<div className={className}>
			{abs && <ButtonAbsolute>DID YOU KNOW ?</ButtonAbsolute>}
			<div className="content">
				<Paragraphe title={title}>{children}</Paragraphe>
				<div className="icons">
					<a href={twitter} target="_blank" rel="noopener noreferrer">
						<FaTwitter />
					</a>
					<a href={facebook} target="_blank" rel="noopener noreferrer">
						<FaFacebookF />
					</a>
				</div>
			</div>
		</div>
	)
}

export default styled(BlockIcons)`
	position: relative;
	background-color: ${colors.white};
	height: 160px;
	width: 310px;

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		height: 100%;
		padding: 1rem;
	}

	.icons {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.icons a {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${colors.accent};
		border-radius: 50%;
		height: 32px;
		width: 32px;
		/* cursor: pointer; */
	}

	.icons svg {
		font-size: 13px;
		margin: 5px;
	}

	${media.small`
    width: 384px;
	`}

	${media.large`
    width: 544px;
  `}
`
