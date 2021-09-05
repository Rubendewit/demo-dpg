import styled from "@emotion/styled";

export const Wrapper = styled.div({
  width: "100%",
  padding: `40px 20px 0`,
  display: "grid",
  justifyContent: "center",
});

export const Info = styled.div({
  maxWidth: 500,
});

export const Name = styled.h2({
  fontFamily: `"Luminari", "Didot", "Georgia", "Times New Roman", serif`,
  fontSize: "2em",
  paddingTop: 10,
});

export const Region = styled.p(({ theme }) => ({
  color: theme.colors.main200,
  fontStyle: "italic",
  fontSize: "1.4em",
  paddingTop: 10,
}));

export const Motto = styled.p(({ theme }) => ({
  color: theme.colors.accent500,
  paddingTop: 10,
  fontWeight: 700,
  fontSize: "1.2em",
}));

export const CoatOfArms = styled.p({
  paddingTop: 10,
});

export const Titles = styled.div(({ theme }) => ({
  paddingTop: 10,

  ul: {
    paddingLeft: 20,
  },

  li: {
    paddingTop: 5,
  },
}));
