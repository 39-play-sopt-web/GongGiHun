const colors = {
  background: "#141414",
  surface: "#1f1f1f",
  surfaceHover: "#2a2a2a",
  border: "#333333",

  textPrimary: "#ffffff",
  textSecondary: "#b3b3b3",
  textDisabled: "#666666",

  primary: "#e50914",
  primaryHover: "#f6121d",
  rating: "#f5c518",
  error: "#ff4d4f",
} as const;

const fontSizes = {
  xs: "1.2rem",
  sm: "1.4rem",
  md: "1.6rem",
  lg: "2rem",
  xl: "2.4rem",
  xxl: "3.2rem",
} as const;

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

const spacing = {
  xs: "0.4rem",
  sm: "0.8rem",
  md: "1.6rem",
  lg: "2.4rem",
  xl: "3.2rem",
  xxl: "4.8rem",
} as const;

const radius = {
  sm: "0.4rem",
  md: "0.8rem",
  lg: "1.2rem",
  full: "9999px",
} as const;

const breakpoints = {
  mobile: "@media (max-width: 768px)",
  tablet: "@media (max-width: 1024px)",
} as const;

export const theme = {
  colors,
  fontSizes,
  fontWeights,
  spacing,
  radius,
  breakpoints,
} as const;

export type Theme = typeof theme;
