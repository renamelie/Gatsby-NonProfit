import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { colors, media } from "../utils/helpers"

import Paragraphe from "./Paragraphe"

const BGImg = styled(Image)`
  position: absolute !important;
  top: 0;
  width: 100%;
  z-index: 2;
  filter: grayscale(80%);

  width: 248px;
  height: 176px;

  ${media.medium`
    width: 320px;
    height: 224px;
 `}
`

const Button = styled.button`
  width: 160px;
  height: 40px;
  background-color: ${colors.accent};
  border-radius: 20px;
`

const BlockImg = ({ className, title, image, children }) => {
  const data = useStaticQuery(graphql`
    query BlockImg {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "images" }
        }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () => data.allFile.edges.find(({ node }) => image === node.name),
    [data, image]
  )

  // console.log(match)

  return (
    <div className={className}>
      <div className="BGColor"></div>
      <BGImg fluid={match.node.childImageSharp.fluid} alt="What We Do" />
      <div className="content">
        <Paragraphe title={title}>{children}</Paragraphe>
        <Button>Read more</Button>
      </div>
    </div>
  )
}

export default styled(BlockImg)`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 2rem;
  z-index: 1;
  min-height: 550px;
  text-align: center;

  .BGColor {
    position: absolute;
    background: ${colors.white};
    width: 100%;
    height: 90%;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  .content {
    margin-top: 176px;
  }

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  ${media.medium`
    .content {
      margin-top: 224px;
    }
  `}

  ${media.large`
    min-height: 550px;
  `}
`
