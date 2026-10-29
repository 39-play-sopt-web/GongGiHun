import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FaStar } from "react-icons/fa";

export const Container = styled.article(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xl};
  `,
);

export const BackButton = styled.button(
  ({ theme }) => css`
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing.xs};

    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.textSecondary};
    transition: color 0.2s;

    &:hover {
      color: ${theme.colors.textPrimary};
    }
  `,
);

/* 헤더 */

export const Header = styled.header(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.sm};
  `,
);

export const Title = styled.h1(
  ({ theme }) => css`
    font-size: clamp(4rem, 8vw, 9.6rem);
    font-weight: ${theme.fontWeights.semibold};
    line-height: 1.05;
    letter-spacing: -0.04em;
    word-break: keep-all;
    text-wrap: balance;
  `,
);

export const Subtitle = styled.p(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.md};
    color: ${theme.colors.textSecondary};
    word-break: keep-all;
  `,
);

/* 본문: 이미지 + 정보 카드 */

export const Body = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) minmax(28rem, 1fr);
    gap: ${theme.spacing.lg};
    align-items: start;

    ${theme.breakpoints.tablet} {
      grid-template-columns: 1fr;
    }
  `,
);

export const Backdrop = styled.img(
  ({ theme }) => css`
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: ${theme.radius.lg};
  `,
);

export const NoImage = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 16 / 9;
    border-radius: ${theme.radius.lg};
    background-color: ${theme.colors.surface};
    color: ${theme.colors.textDisabled};
  `,
);

export const InfoCard = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.lg};
    padding: ${theme.spacing.lg};
    border-radius: ${theme.radius.lg};
    background-color: ${theme.colors.surface};
  `,
);

export const CardTop = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: flex-end;
    gap: ${theme.spacing.md};
  `,
);

export const Poster = styled.img(
  ({ theme }) => css`
    width: 8rem;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    border-radius: ${theme.radius.md};
  `,
);

export const RatingBlock = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs};
  `,
);

export const RatingScore = styled.p(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xs};
    font-size: ${theme.fontSizes.xxl};
    font-weight: ${theme.fontWeights.bold};
    line-height: 1;
  `,
);

export const StarIcon = styled(FaStar)(
  ({ theme }) => css`
    font-size: 0.8em; /* 점수 글자 크기에 비례 */
    color: ${theme.colors.rating};
  `,
);

export const RatingCount = styled.p(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.textSecondary};
  `,
);

export const Divider = styled.hr(
  ({ theme }) => css`
    border: none;
    height: 1px;
    background-color: ${theme.colors.border};
  `,
);

export const InfoGrid = styled.dl(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.md} ${theme.spacing.lg};
  `,
);

export const InfoItem = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs};
  `,
);

// 장르처럼 길어질 수 있는 항목은 두 칸을 다 차지
export const InfoItemWide = styled(InfoItem)`
  grid-column: 1 / -1;
`;

export const Label = styled.dt(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.textSecondary};
  `,
);

export const Value = styled.dd(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.medium};
  `,
);

export const GenreList = styled.dd(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing.xs};
  `,
);

export const GenreChip = styled.span(
  ({ theme }) => css`
    padding: 0.6rem 1.2rem;
    border-radius: ${theme.radius.full};
    background-color: ${theme.colors.primarySubtle}
    font-size: ${theme.fontSizes.xs};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.primaryText}
  `,
);

/* 줄거리 */

export const OverviewSection = styled.section(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.sm};
    max-width: 72rem; /* 한 줄이 너무 길면 읽기 힘듦 */
  `,
);

export const SectionTitle = styled.h2(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
    font-weight: ${theme.fontWeights.semibold};
  `,
);

export const Overview = styled.p(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.md};
    line-height: 1.7;
    color: ${theme.colors.textSecondary};
    word-break: keep-all;
  `,
);

export const Message = styled.p(
  ({ theme }) => css`
    padding: ${theme.spacing.xxl} 0;
    text-align: center;
    color: ${theme.colors.textSecondary};
  `,
);
