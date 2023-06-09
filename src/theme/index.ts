import { createTheme } from '@mui/material/styles';
import '@fontsource/noto-sans';

declare module '@mui/material/styles' {
  interface Palette {
    dark: string
    gray: string
    black: string
    grayBody: string
    grayLabel: string
    grayPlaceHolder: string
    line: string
    inputBg: string
    offWhite: string
    bgDark: string
    bgLight: string
  }
  interface PaletteOptions {
    dark: string
    gray: string
    black: string
    grayBody: string
    grayLabel: string
    grayPlaceHolder: string
    line: string
    inputBg: string
    offWhite: string
    bgDark: string
    bgLight: string
  }

  interface TypographyVariants {
    title: React.CSSProperties
    subtitle1: React.CSSProperties
    subtitle2: React.CSSProperties
    bodyLarge: React.CSSProperties
    bodyMedium: React.CSSProperties
    bodySmall: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties
    subtitle1?: React.CSSProperties
    subtitle2?: React.CSSProperties
    bodyLarge?: React.CSSProperties
    bodyMedium?: React.CSSProperties
    bodySmall?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true
    subtitle1: true
    subtitle2: true
    bodyLarge: true
    bodyMedium: true
    bodySmall: true
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#DD8560'
    },
    secondary: {
      main: '#A8715A'
    },
    dark: '#252525',
    gray: '#878787',
    black: '#000000',
    grayBody: '#333333',
    grayLabel: '#555555',
    grayPlaceHolder: '#888888',
    line: '#E0CFBA',
    inputBg: '#F9F9F9',
    offWhite: '#FCFCFC',
    bgDark: '#323232',
    bgLight: '#f5f5f5'
  },
  typography: {
    fontFamily: 'Noto Sans',
    title: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '40px',
      letterSpacing: '4px',
      textTransform: 'uppercase'
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '2px',
      textTransform: 'uppercase'
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '2px',
      textTransform: 'uppercase'
    },
    bodyLarge: {
      fontWeight: 400,
      fontSize: '16px',
      color: '#727272',
      lineHeight: '24px'
    },
    bodyMedium: {
      fontWeight: 400,
      fontSize: '14px',
      color: '#727272',
      lineHeight: '24px'
    },
    bodySmall: {
      fontWeight: 400,
      fontSize: '12px',
      color: '#727272',
      lineHeight: '18px'
    }
  }
});

export default theme;
