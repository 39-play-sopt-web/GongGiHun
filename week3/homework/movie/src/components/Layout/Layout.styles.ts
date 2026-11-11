import styled from "@emotion/styled";
import { Link } from "react-router";

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;

  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
`;
export const LogoAccent = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Main = styled.main`
  max-width: 120rem;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;
