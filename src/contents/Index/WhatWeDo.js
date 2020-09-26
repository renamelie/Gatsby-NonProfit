import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Wrapper from '../../components/Wrapper'
import { colors, media } from '../../utils/helpers'
import BlockImg from '../../components/BlockImg'

const WhatWeDo = ({ className }) => {
	return (
		<div className={className}>
			<Wrapper>
				<Button style={{ background: colors.white, color: colors.primary }}>
					WHAT WE DO
				</Button>
				<h1>
					Our mission is to create sustainable work for women in developing
					nations while helping to slow climate change.
				</h1>
				<div className="container">
					<BlockImg title="Tree Planting Initiatives" image="WWD1">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
						felis, auctor vitae vestibulum vel, consequat eu dolor. Nam
						pellentesque euismod laoreet.
					</BlockImg>
					<BlockImg title="Tree Planting Initiatives" image="WWD2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
						felis, auctor vitae vestibulum vel, consequat eu dolor. Nam
						pellentesque euismod laoreet.
					</BlockImg>
					<BlockImg title="Tree Planting Initiatives" image="WWD3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
						felis, auctor vitae vestibulum vel, consequat eu dolor. Nam
						pellentesque euismod laoreet.
					</BlockImg>
				</div>
			</Wrapper>
		</div>
	)
}

export default styled(WhatWeDo)`
	background-color: ${colors.primary};
	text-align: center;

	& .container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	& h1 {
		color: ${colors.white};
		font-size: 22px;
		line-height: 28px;
		font-weight: 600;
		margin: 2rem 0;
	}

	${media.medium`
    text-align: left;

    & h1 {
      font-size: 36px;
      line-height: 46px;
    }
  `};

	${media.large`
    & .container {
      flex-direction: row;
    }

    & h1 {
      font-size: 44px;
      line-height: 56px;
    }
  `};
`
