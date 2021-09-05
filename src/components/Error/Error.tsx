import { FC } from "react";
import NextLink from "next/link";
import { Wrapper, ErrorBlock, Message, Quote } from "./Error.styled";

export const Error: FC = () => {
  return (
    <Wrapper>
      <ErrorBlock>
        <Quote>That&apos;s what I do, I drink and break things.</Quote>
        <Message>
          Something has gone wrong! Please refresh the page, or go{" "}
          <NextLink href="/">
            <a>back to home</a>
          </NextLink>
          .
        </Message>
      </ErrorBlock>
    </Wrapper>
  );
};
