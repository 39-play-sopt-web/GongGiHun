import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledSelect = styled.select`
  padding: 6px 28px 6px 10px; /* 오른쪽에 아이콘 자리 확보 */
  font-size: 13px;
  cursor: pointer;
  appearance: none;

  ${({ theme: { colors, radius } }) => `
    border: 1px solid ${colors.border};
    border-radius: ${radius.sm};
    background: ${colors.surface};
    color: ${colors.text};
  `}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Chevron = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  width: 12px;
  height: 12px;
  transform: translateY(-50%);
  pointer-events: none; /* 아이콘을 눌러도 select가 열리게 */
`;
