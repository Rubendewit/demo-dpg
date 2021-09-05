import styled from "@emotion/styled";

export const BackLink = styled.div(({ theme }) => ({
  background: theme.colors.main200,
  padding: 10,
  width: "100%",
  
  a: {
    color: theme.colors.main700,

    ':hover': {
      textDecoration: 'none',
    }
  },
}));
