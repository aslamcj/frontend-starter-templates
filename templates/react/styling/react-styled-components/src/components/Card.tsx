import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.9375rem;
  }
`;
