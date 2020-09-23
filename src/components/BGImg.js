import styled from "styled-components"
import Image from "gatsby-image"

const BGImg = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  filter: opacity(80%) grayscale(80%);
`

export default BGImg
