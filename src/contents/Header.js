import React from "react"
import styled from "styled-components"
import Logo from "../components/Logo"
import { colors, media } from "../utils/helpers"

const Header = ({ title, className }) => {
  return (
    <header className={className}>
      <div className="header">
        <Logo title={title} />
        <div className="menu">
          <span>About us</span>
          <span>Our stories</span>
          <span>News and events</span>
        </div>
      </div>
      <div className="donate">
        <button>Donate Today</button>
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
  }

  .donate {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .donate button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${colors.accent};
    border-radius: 20px;
    padding: 19px;
    max-height: 32px;
    font-size: 18px;
    font-weight: 500;
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

    .donate button {
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
