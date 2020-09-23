import { css } from "styled-components"

export const colors = {
  primary: "#354463",
  accent: "#c1f7d5",
  white: "#fff",
  black: "#1f1f1f",
  lightGrey: "#f7f5f6",
  grey: "#41484c",
}

export const pxToRem = (px = 16) => {
  return `${px / 16}rem`
}

export const layout = (px = 1170) => {
  return `
    max-width: ${pxToRem(px)};
    margin: 0 auto;
    padding: 0 ${pxToRem(8)};`
}

const sizes = {
  extraLarge: 1400,
  large: 1200,
  bigMedium: 1000,
  medium: 768,
  small: 600,
  smaller: 376,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})
