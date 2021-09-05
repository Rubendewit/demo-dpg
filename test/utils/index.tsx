import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@src/theme";

const Providers: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options: RenderOptions = {}) =>
  render(ui, { wrapper: Providers, ...options });

export const mock = (fn: any) => fn as jest.Mock;

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
