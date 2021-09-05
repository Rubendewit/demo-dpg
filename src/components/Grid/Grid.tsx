import { FC } from "react";
import { AllHouses } from "@src/types";
import { Wrapper } from "./Grid.styled";

type GridProps = {
  houses: AllHouses | undefined;
};

export const Grid: FC<GridProps> = ({ houses }) => {
  if (!houses?.length) {
    return null;
  }

  return (
    <Wrapper>
      {houses.map((house) => (
        <p key={house.id}>{house.name}</p>
      ))}
    </Wrapper>
  );
};
