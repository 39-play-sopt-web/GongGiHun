import styled from "styled-components";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 24px;

  ${({ theme: { colors, layout } }) => `
    height: ${layout.headerHeight};
    background: ${colors.surface};
    border-bottom: 1px solid ${colors.border};
  `}
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 8px;
`;

export const Tab = styled.button`
  padding: 6px 14px;
  border: none;
  font-size: 13px;

  ${({ theme: { colors, radius }, $active }) => `
    border-radius: ${radius.pill};
    background: ${$active ? colors.primary : "transparent"};
    color: ${$active ? colors.primaryText : colors.textMuted};
    font-weight: ${$active ? 700 : 500};
  `}
`;
