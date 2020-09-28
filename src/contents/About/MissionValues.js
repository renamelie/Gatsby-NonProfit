import React from 'react'
import styled from 'styled-components'
import { colors, media } from '../../utils/helpers'

import { BsPeople, BsHeart, BsBook } from 'react-icons/bs'
import { ImEarth } from 'react-icons/im'
import { RiPlantLine, RiSunLine } from 'react-icons/ri'
import { FaRegHandPaper } from 'react-icons/fa'
import { VscPerson } from 'react-icons/vsc'

import Button from '../../components/Button'
import Wrapper from '../../components/Wrapper'
import Paragraphe from '../../components/Paragraphe'

const icons = [
	{
		name: 'Person',
		icon: <VscPerson />,
		title: 'Stay openminded',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis scelerisque lectus.',
	},
	{
		name: 'Earth',
		icon: <ImEarth />,
		title: 'Protect the Earth',
		text:
			'Aliquam ullamcorper feugiat urna ut bibendum. Nulla eu erat sed ipsum eleifend.',
	},
	{
		name: 'Sun',
		icon: <RiSunLine />,
		title: 'Work from love',
		text:
			'Curabitur faucibus, libero vel posuere pharetra, dolor erat pharetra purus, ut accumsan.',
	},
	{
		name: 'Plant',
		icon: <RiPlantLine />,
		title: 'Plant new seeds',
		text:
			'Donec a maximus ligula. Mauris consequat sapien lectus, eu aliquam sem cursus. ',
	},
	{
		name: 'Heart',
		icon: <BsHeart />,
		title: 'Lend a hand',
		text:
			'Curabitur faucibus, libero vel posuere pharetra, dolor erat pharetra purus, ut accumsan.',
	},
	{
		name: 'Hand',
		icon: <FaRegHandPaper />,
		title: 'Plant new seeds',
		text:
			'Donec a maximus ligula. Mauris consequat sapien lectus, eu aliquam sem cursus. ',
	},
	{
		name: 'People',
		icon: <BsPeople />,
		title: 'Lend a hand',
		text:
			'Curabitur faucibus, libero vel posuere pharetra, dolor erat pharetra purus, ut accumsan.',
	},
	{
		name: 'Book',
		icon: <BsBook />,
		title: 'Plant new seeds',
		text:
			'Donec a maximus ligula. Mauris consequat sapien lectus, eu aliquam sem cursus. ',
	},
]

const MissionValues = ({ className }) => {
	return (
		<div className={className}>
			<Wrapper className="wrapper">
				<Button style={{ background: colors.white, color: colors.primary }}>
					Mission & values
				</Button>
				<h1>
					We strive for better environmental management, community empowerment,
					and livelihood improvement using tree-planting as an entry point.
				</h1>
				<div className="container">
					{icons.map(({ name, icon, title, text }) => (
						<div className="iconItem" key={name}>
							{icon}
							<Paragraphe title={title}>{text}</Paragraphe>
						</div>
					))}
				</div>
			</Wrapper>
		</div>
	)
}

export default styled(MissionValues)`
	display: flex;
	justify-content: center;
	background-color: ${colors.primary};
	color: ${colors.white};

	& .wrapper {
		max-width: 1400px;
	}

	& .container {
		padding: 1rem 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem 1rem;
	}

	& h1 {
		color: ${colors.white};
		text-align: center;
		font-size: 20px;
		line-height: 26px;
		font-weight: 600;
		margin: 2rem 0;
	}

	& .iconItem svg {
		color: ${colors.accent};
		width: 40px;
		height: 40px;
		margin-bottom: 0.5rem;
	}

	${media.medium`
		& .container {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 2rem;
		}

    & h1 {
			text-align: left;
      font-size: 36px;
      line-height: 46px;
    }
  `};

	${media.large`
    & .container {
      flex-direction: row;
		}

		& .container {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}

    & h1 {
      font-size: 44px;
      line-height: 56px;
		}

		& .iconItem svg {
			width: 50px;
			height: 50px;
		}
  `};
`
