import styled from "@emotion/styled";

export const Wrapper = styled.div(({ theme }) => ({
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
}));

export const ErrorBlock = styled.div(({ theme }) => ({
  borderBottom: `4px solid ${theme.colors.accent100}`,
  padding: 20,
  maxWidth: 400,
}));

export const Quote = styled.div(({ theme }) => ({
  fontFamily: `"Luminari", "Didot", "Georgia", "Times New Roman", serif`,
  paddingBottom: 20,
  fontSize: '1.4em',
}));

export const Message = styled.div(({ theme }) => ({
  a: {
    color: theme.colors.main100,
  }
}));
