import styled from "styled-components";

// 반투명 배경
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.45);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 260px;
  padding: 28px 24px 24px;

  ${({ theme: { colors, radius } }) => `
    border-radius: ${radius.md};
    background: ${colors.bgFrom};
    color: ${colors.text};
  `}

  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

export const Body = styled.div`
  font-size: 28px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 10px 0;
  border: none;
  font-size: 14px;
  font-weight: 700;

  ${({ theme: { colors, radius } }) => `
    border-radius: ${radius.sm};
    background: ${colors.primary};
    color: ${colors.primaryText};
  `}

  &:hover {
    filter: brightness(0.95);
  }
`;
