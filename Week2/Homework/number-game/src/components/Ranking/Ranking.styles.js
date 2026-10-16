import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  padding: 48px 24px;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
`;

export const Empty = styled.p`
  margin: 0;
  padding: 48px 0;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMuted};
`;
export const ResetButton = styled.button`
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;

  ${({ theme: { colors, radius } }) => `
    border: 1px solid ${colors.danger};
    border-radius: ${radius.sm};
    background: transparent;
    color: ${colors.danger};
  `}
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate; /* 모서리 radius 적용을 위해 collapse 대신 사용 */
  border-spacing: 0;
  overflow: hidden;
  font-size: 13px;
  text-align: left;

  ${({ theme: { colors, radius, shadow } }) => `
    border-radius: ${radius.md};
    background: ${colors.surface};
    box-shadow: ${shadow.card};
  `}

  th,
  td {
    padding: 12px 14px;
  }

  th {
    font-weight: 700;
    background: ${({ theme }) => theme.colors.primary};
  }

  td {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  tbody tr:first-child td {
    border-top: none;
  }
`;

export const Rank = styled.td`
  font-weight: 700;
`;
