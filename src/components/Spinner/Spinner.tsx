import { FC } from "react";
import { Wrapper, Loader } from "./Spinner.styled";

type SpinnerProps = {
  absolute?: boolean;
};

export const Spinner: FC<SpinnerProps> = ({ absolute }) => {
  return (
    <Wrapper absolute={absolute} data-testid="spinner">
      <Loader />
    </Wrapper>
  );
};
