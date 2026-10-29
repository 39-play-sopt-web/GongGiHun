import styled from '@emotion/styled';
import { Link } from 'react-router';

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.surface};

  transition: transform 0.2s;
  &:hover {
    transform: translateY(-0.4rem);
    background-color: ${({ theme }) => theme.colors.surfaceHover};
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

export const Rating = styled.span`
  color: ${({ theme }) => theme.colors.rating};
`;
export const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;
