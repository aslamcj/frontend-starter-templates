import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from './styles/theme.css';

export const container = style({
  minHeight: '100vh',
  padding: vars.space.xl,
});

export const title = style({
  fontSize: '2.5rem',
  textAlign: 'center',
  color: vars.color.primary,
});

export const card = style({
  maxWidth: '400px',
  margin: `${vars.space.xl} auto`,
  padding: vars.space.xl,
  background: vars.color.surface,
  borderRadius: vars.radius.lg,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
});

export const count = style({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: vars.color.primary,
  margin: `${vars.space.lg} 0`,
});

export const buttonGroup = style({
  display: 'flex',
  gap: vars.space.sm,
  justifyContent: 'center',
});

const buttonBase = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  border: 'none',
  borderRadius: vars.radius.md,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background 0.2s',
});

export const button = styleVariants({
  primary: [
    buttonBase,
    {
      background: vars.color.primary,
      color: 'white',
      ':hover': {
        background: vars.color.primaryHover,
      },
    },
  ],
  secondary: [
    buttonBase,
    {
      background: '#e2e8f0',
      color: vars.color.text,
      ':hover': {
        background: '#cbd5e1',
      },
    },
  ],
});
