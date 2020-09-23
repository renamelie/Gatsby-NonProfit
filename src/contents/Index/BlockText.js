import React from "react"
import styled from "styled-components"
import { media } from "../../utils/helpers"
import ButtonAbsolute from "../../components/ButtonAbsolute"

const BlockText = ({ className }) => {
  return (
    <div className={className}>
      <ButtonAbsolute>THE ISSUE</ButtonAbsolute>
      <div className="container">
        <p>
          Climate change poses the biggest threat to women in developing
          nations.
        </p>
        <p>Read more about this environmental and social cause</p>
      </div>
    </div>
  )
}

export default styled(BlockText)`
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    height: 100%;
    max-height: 500px;
    padding: 2rem;
  }

  .container p:first-child {
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
  }

  .container p:last-child {
    font-size: 11px;
  }

  ${media.small`
    .container p:first-child {
      font-size: 30px;
      font-weight: 600;
      line-height: 46px;
    }

    .container p:last-child {
      font-size: 16px;
    }
  `}

  ${media.large`
    .container p:first-child {
      font-size: 40px;
      font-weight: 600;
      line-height: 56px;
    }
  `}
`
