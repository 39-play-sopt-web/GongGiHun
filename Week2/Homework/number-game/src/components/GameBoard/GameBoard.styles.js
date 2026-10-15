import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 48px 24px;
`;

export const Status = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const NextNumber = styled.strong`
  margin: 0 4px 0 6px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 120px);
  gap: 8px;
`;

export const Cell = styled.button`
  height: 120px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 22px;
  font-weight: 700;

  ${({ theme: { colors, radius, shadow } }) => `
    border-radius: ${radius.md};
    background: ${colors.surface};
    color: ${colors.text};
    box-shadow: ${shadow.card};
  `}

  ${({ $empty }) =>
    $empty &&
    css`
      visibility: hidden;
    `}

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    border-color: transparent;
  }
  &:active {
    background: ${({ theme }) => theme.colors.surfacePressed};
  }
`;
