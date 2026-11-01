import styled from "styled-components";

export const Time = styled.span`
  min-width: 64px;
  font-size: 14px;
  font-weight: 700;
  text-align: right;
  font-variant-numeric: tabular-nums;
  padding: 6px 10px;

  ${({ theme: { colors, radius } }) => `
    border: 0px;
    border-radius: ${radius.sm};
    background: ${colors.primary};
    color: ${colors.primaryText};
  `}
`;
