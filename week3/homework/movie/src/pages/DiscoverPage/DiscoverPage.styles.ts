import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Title = styled.h2(
  ({ theme }) => css`
    margin-bottom: ${theme.spacing.md};
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.bold};
  `,
);

export const FilterList = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  `,
);
export const FilterChip = styled.button<{ isActive: boolean }>(
  ({ theme, isActive }) => css`
    padding: 0.6rem 1.4rem;
    border-radius: ${theme.radius.full};
    font-size: ${theme.fontSizes.xs};
    color: ${isActive ? theme.colors.onPrimary : theme.colors.textSecondary};
    background-color: ${isActive ? theme.colors.primary : theme.colors.surface};
    transition:
      color 0.2s,
      background-color 0.2s;

    ${theme.media.hover} {
      &:hover {
        color: ${isActive ? theme.colors.onPrimary : theme.colors.textPrimary};
      }
    }

    &:active {
      transform: scale(0.98);
    }
  `,
);

export const Grid = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${theme.spacing.md};

    ${theme.breakpoints.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }

    ${theme.breakpoints.mobile} {
      grid-template-columns: repeat(2, 1fr);
    }
  `,
);

export const Message = styled.p(
  ({ theme }) => css`
    padding: ${theme.spacing.xxl} 0;
    text-align: center;
    color: ${theme.colors.textSecondary};
  `,
);

export const Sentinel = styled.div`
  height: 1px;
`;
