import styled, { keyframes, css } from "styled-components";

const shake = keyframes`  
  0%, 100% { transform: translateX(0); }
  20%      { transform: translateX(-6px); }
  40%      { transform: translateX(6px); }
  60%      { transform: translateX(-4px); }
  80%      { transform: translateX(4px); }
`;

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
  /* $size: 레벨별 한 줄 칸 수 (3, 4, 5). 렌더 시 props 받도록 */
  grid-template-columns: repeat(${({ $size }) => $size}, minmax(0, 1fr));
  gap: 8px;
  width: min(100%, ${({ $size }) => $size * 120 + ($size - 1) * 8}px);
`;

export const Cell = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: clamp(14px, 4vw, 22px);
  font-weight: 700;
  transition: transform 0.08s;
  aspect-ratio: 1;

  &:active {
    transform: scale(0.94);
  }

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

  ${({ $shake }) =>
    $shake &&
    css`
      animation: ${shake} 0.3s;
    `}
  
  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    border-color: transparent;
  }
  &:active {
    background: ${({ theme }) => theme.colors.surfacePressed};
  }
`;
