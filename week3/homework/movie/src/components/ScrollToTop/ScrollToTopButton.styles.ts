import styled from "@emotion/styled";
import { css } from "@emotion/react";

// 문서 맨 위에 고정된 투명 감시 영역
// position: absolute + 위치 기준이 되는 조상이 없음 → 문서 맨 위 기준으로 배치
export const TopSentinel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 60rem;
  pointer-events: none;
`;

export const Button = styled.button<{ isVisible: boolean }>(
  ({ theme, isVisible }) => css`
    position: fixed;
    right: ${theme.spacing.lg};
    bottom: ${theme.spacing.lg};
    z-index: 20;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: ${theme.radius.full};
    background-color: ${theme.colors.primary};
    box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.4);

    font-size: 2.2rem;
    color: ${theme.colors.onPrimary};

    /* 숨김 ↔ 표시를 부드럽게 */
    opacity: ${isVisible ? 1 : 0};
    transform: translateY(${isVisible ? "0" : "1.6rem"});
    visibility: ${isVisible ? "visible" : "hidden"};
    transition:
      opacity 0.2s,
      transform 0.2s,
      visibility 0.2s;

    ${theme.media.hover} {
      &:hover {
        background-color: ${theme.colors.primaryHover};
      }
    }

    &:active {
      transform: scale(0.92);
    }
  `,
);
