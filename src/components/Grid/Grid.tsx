import { FC } from "react";
import { AllHouses } from "@src/types";
import { Card } from "../Card";
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
        <Card key={house.id} house={house} />
      ))}
    </Wrapper>
  );
};
