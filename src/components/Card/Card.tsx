import { FC } from "react";
import NextLink from "next/link";
import { AllHouses } from "@src/types";
import { Link, Name, Motto, Region } from "./Card.styled";

type CardProps = {
  house: AllHouses[number];
};

export const Card: FC<CardProps> = ({ house }) => {
  const { id, name, region, words } = house;

  const link = `/house/${id}`;

  return (
    <NextLink as={link} href={{ pathname: link }}>
      <Link>
        <Name>{name}</Name>
        <Region>{region}</Region>
        <Motto>{words}</Motto>
      </Link>
    </NextLink>
  );
};