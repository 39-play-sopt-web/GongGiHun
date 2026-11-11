const colors = {
  background: "#0f1014",
  surface: "#181a20",
  surfaceHover: "#22252d",
  border: "rgba(255, 255, 255, 0.08)",

  textPrimary: "#f5f6f8",
  textSecondary: "#a1a5b0",
  textDisabled: "#6b7080",

  primary: "#e5383b",
  onPrimary: "#fff",
  primaryHover: "#ef5355",
  primarySubtle: "rgba(229, 56, 59, 0.15)",
  primaryText: "#ff7a7d",

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
  semibold: 600,
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

const media = {
  hover: "@media (hover: hover) and (pointer: fine)",
} as const;

export const theme = {
  colors,
  fontSizes,
  fontWeights,
  spacing,
  radius,
  breakpoints,
  media,
} as const;

export type Theme = typeof theme;
