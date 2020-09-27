import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import { colors, media } from '../utils/helpers'
import ButtonLink from '../components/ButtonLink'
import { Link } from 'gatsby'

const Header = ({ title, className }) => {
	return (
		<header className={className}>
			<div className="header">
				<Logo title={title} />
				<div className="menu">
					<Link to="/about">
						<span>About us</span>
					</Link>
					<Link to="/storie1">
						<span>Our stories</span>
					</Link>
					<Link to="/news">
						<span>News and events</span>
					</Link>
				</div>
			</div>
			<div className="donate">
				<ButtonLink to="/">Donate Today</ButtonLink>
			</div>
		</header>
	)
}

export default styled(Header)`
	/* border: 2px solid ${colors.accent}; */
	position: relative;
	width: calc(100vw - 2 * 8vw);
	left: 8vw;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1rem 0;
	height: 200px;

	.header {
		flex: 1;
		display: flex;
		justify-content: space-between;
	}

	.menu {
		display: flex;
		flex-direction: column;
		font-size: 12px;
		font-weight: 500;
	}

	.donate {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.donate > * {
		width: 100%;
	}

	${media.medium`
    flex-direction: row;
    height: 128px;

    .header {
      flex: 2;
      flex-direction: column;
      justify-content: space-between;
    }

    .menu {
      flex-direction: row;
      font-size: 16px;
    }

    .menu > * {
      margin-right: 20px;
    }

    .donate > * {
      max-width: 170px;
    }
  `};

	${media.bigMedium`
    .header {
        flex: 3;
        flex-direction: row;
        align-items: center;
      }

    .menu > * {
      margin-right: 2rem;
    }
  `};
`
