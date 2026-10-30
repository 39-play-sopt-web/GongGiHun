import styled from "@emotion/styled";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

export const Card = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.surface};

  transition:
    transform 0.2s,
    box-shadow 0.2s;
  ${({ theme }) => theme.media.hover} {
    &:hover {
      transform: scale(1.03);
      box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.5);
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Poster = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
`;

export const NoPoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 2 / 3;

  color: ${({ theme }) => theme.colors.textDisabled};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
`;

export const Title = styled.h3`
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const RatingBadge = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  left: ${({ theme }) => theme.spacing.sm};

  padding: 0.4rem 1rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  gap: 0.4rem;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ReleaseDate = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Overview = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StarIcon = styled(FaStar)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.rating};
`;
