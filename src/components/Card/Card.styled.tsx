import styled from "@emotion/styled";

export const Link = styled.a(({ theme }) => ({
  borderRadius: 2,
  background: theme.colors.main700,
  width: "100%",
  padding: 20,
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
}));

export const Name = styled.h2({
  fontFamily: `"Luminari", "Didot", "Georgia", "Times New Roman", serif`,
});

export const Region = styled.p(({ theme }) => ({
  color: theme.colors.main200,
  fontStyle: "italic",
}));

export const Motto = styled.p(({ theme }) => ({
  color: theme.colors.accent500,
  paddingTop: 10,
  fontWeight: 700,
}));
