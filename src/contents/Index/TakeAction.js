import React from "react"
import styled from "styled-components"
import { colors, media } from "../../utils/helpers"

import Wrapper from "../../components/Wrapper"
import ButtonAbsolute from "../../components/ButtonAbsolute"
import Paragraphe from "../../components/Paragraphe"

const TakeAction = ({ className }) => {
  return (
    <div className={className}>
      <ButtonAbsolute>TAKE ACTION</ButtonAbsolute>
      <Wrapper>
        <div className="container">
          <Paragraphe title="Learn">
            Get the facts about this issue and how we’re helping.
          </Paragraphe>
          <Paragraphe title="Volunteer">
            Find out about upcoming events that need your help.
          </Paragraphe>
          <Paragraphe title="Share">
            Let your social media networks know about this important cause.
          </Paragraphe>
          <Paragraphe title="Donate">
            Help us raise money to make a big difference with this issue.
          </Paragraphe>
        </div>
      </Wrapper>
    </div>
  )
}

export default styled(TakeAction)`
  position: relative;
  background-color: ${colors.accent};

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  ${media.large`
    .container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  `};
`
