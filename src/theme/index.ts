type Colors = {
  main100: string;
  main200: string;
  main700: string;
  main800: string;
  accent100: string;
  accent500: string;
};

type Responsive = {
  sm: string;
  md: string;
  lg: string;
};

export type Theme = {
  colors: Colors;
  responsive: Responsive;
  spacing: number;
};

export const theme: Theme = {
  colors: {
    main100: "#FFFCF2",
    main200: "#CCC5B9",
    main700: "#403D39",
    main800: "#252422",
    accent100: "#F38356",
    accent500: "#EB5E28",
  },
  responsive: {
    sm: "(min-width: 375px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
  spacing: 10,
};
