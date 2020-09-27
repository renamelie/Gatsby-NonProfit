import React from 'react'
import styled from 'styled-components'
import { colors, media } from '../../utils/helpers'

import Wrapper from '../../components/Wrapper'

const MailchimpForm = ({ className }) => {
	return (
		<div className="mail">
			<form
				name="mailchimp"
				method="POST"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				action="/success"
			>
				<input type="hidden" name="form-name" value="mailchimp" />
				<input type="hidden" name="bot-field" />

				<label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email address"
					/>
				</label>

				<button type="submit">SEND</button>
			</form>
		</div>
	)
}

const Subscribe = ({ className }) => {
	return (
		<div className={className}>
			<Wrapper style={{ padding: '3rem 0 1rem' }}>
				<p>
					Subscribe to our monthly newsletter and stay up to date with all news
					and events.
				</p>
				<MailchimpForm />
			</Wrapper>
		</div>
	)
}

export default styled(Subscribe)`
	border: 2px solid pink;
	background-color: ${colors.accent};

	& > *:first-child {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	& p {
		font-size: 22px;
		line-height: 28px;
		font-weight: 600;
	}

	& .mail {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem 0;
	}

	& form {
		margin: 0;
	}

	& input,
	& button {
		height: 60px;
		padding: 0 45px;
		border-radius: 100px;
		outline: none;
		transition: 0.3s all ease-in-out;
		margin: 10px;
		font-weight: 500;
	}

	& input {
		color: ${colors.primary};
		border: 2px solid #ededed;
		/* min-width: 350px; */
	}

	& button {
		color: ${colors.accent};
		background-color: ${colors.primary};
		border: 2px solid #41484c;
	}

	& form {
		display: flex;
		justify-content: center;
		margin: 20px;
		flex-flow: row wrap;
	}

	${media.large`
    & > *:first-child {
      flex-direction: row;
    }

    & > *:first-child > * {
      flex: 1;
    }
  `}
`