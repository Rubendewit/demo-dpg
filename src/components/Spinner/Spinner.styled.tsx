import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const Wrapper = styled.div<{ absolute?: boolean }>(({ absolute }) => ({
  width: 50,
  height: 50,

  ...(absolute && {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }),
}));

export const Loader = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",

  "::after": {
    content: '""',
    width: 50,
    height: 50,
    border: `10px solid ${theme.colors.main200}`,
    borderTopColor: theme.colors.accent500,
    borderRadius: "50%",
    animation: `${spin} 1s ease infinite`,
  },
}));
