import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    primary: null,
    primaryHover: null,
    secondary: null,
    background: null,
    surface: null,
    text: null,
    textMuted: null,
  },
  space: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    secondary: '#64748b',
    background: '#f8fafc',
    surface: '#ffffff',
    text: '#0f172a',
    textMuted: '#64748b',
  },
  space: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
  },
});
