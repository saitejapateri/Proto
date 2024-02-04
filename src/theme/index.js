import PropTypes from 'prop-types';
import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import palette from './palette';
// import shadows from './shadows';
import typography from './typography';
import GlobalStyles from './globalstyles';
// import customShadows from './customShadows';
import componentsOverride from './overrides';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const themeOptions = {
      palette,
      shape: { borderRadius: 6 },
      typography
    }

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);
  console.log(theme)
  console.log(children)
  return (
    // <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    // </StyledEngineProvider>
  );
}
