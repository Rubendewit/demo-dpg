import { FC } from "react";
import NextLink from "next/link";
import { AllHouses } from "@src/types";
import { Link, Name, Motto, Region } from "./Card.styled";

type CardProps = {
  house: AllHouses[number] | undefined;
};

export const Card: FC<CardProps> = ({ house }) => {
  if (!house) {
    return null;
  }

  const { id, name, region, words } = house;

  const link = `/house/${id}`;

  return (
    <NextLink as={link} href={{ pathname: link }} passHref>
      <Link>
        <Name>{name}</Name>
        <Region>{region}</Region>
        <Motto>{words}</Motto>
      </Link>
    </NextLink>
  );
};
