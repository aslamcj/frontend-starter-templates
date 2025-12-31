import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  $variant?: ButtonVariant;
}

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
  outline: css`
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.surface};
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  ${({ $variant = 'primary' }) => variantStyles[$variant]}
`;
