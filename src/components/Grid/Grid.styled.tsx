import styled from "@emotion/styled";

export const Wrapper = styled.div(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "100%",
  gridGap: 10,
  padding: 10,

  [`@media ${theme.responsive.sm}`]: {
    gridTemplateColumns: "repeat(2, 50%)",
  },

  [`@media ${theme.responsive.md}`]: {
    gridTemplateColumns: "repeat(3, 33%)",
  },

  [`@media ${theme.responsive.lg}`]: {
    gridTemplateColumns: "repeat(4, 25%)",
  },
}));
