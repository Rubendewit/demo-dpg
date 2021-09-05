import { FC } from "react";
import { House } from "../../types";
import {
  CoatOfArms,
  Info,
  Motto,
  Name,
  Region,
  Titles,
  Wrapper,
} from "./HouseInfo.styled";

type HouseInfoProps = {
  house: House | undefined;
};

export const HouseInfo: FC<HouseInfoProps> = ({ house }) => {
  if (!house) {
    return null;
  }

  const { name, region, words, coatOfArms, titles } = house;

  return (
    <Wrapper>
      <Info>
        <Name>{name}</Name>
        <Region>{region}</Region>
        <Motto>{words}</Motto>
        {coatOfArms && <CoatOfArms>Coat of arms: {coatOfArms}</CoatOfArms>}

        {!!titles?.length && (
          <Titles>
            <span>{name} holds the titles:</span>
            <ul>
              {titles?.map((title) => (
                <li key={title}>{title}</li>
              ))}
            </ul>
          </Titles>
        )}
      </Info>
    </Wrapper>
  );
};
