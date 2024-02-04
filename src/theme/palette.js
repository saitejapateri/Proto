import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: '#F9FAFB',
  100: '#F4F6F8',
  200: '#DFE3E8',
  300: '#C4CDD5',
  400: '#919EAB',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  main: '#0B58F5',
  contrastText: '#fff',
  gradient800: '#0946C4',
  0: '#FFFFFF',
  100: '#E7EEFE',
  200: '#CEDEFD',
  300: '#B6CDFC',
  400: '#9DBCFB',
  500: '#6D9BF9',
  600: '#3C79F7',
  700: '#0B58F5',
  800: '#0946C4',
  900: '#073593',
  1000: '#042363',
  1100: '#031A4A',
  1200: '#021232',
  1300: '#010919',
  1400: '#000001',
};

const SECONDARY = {
  lighter: '#FFECED',
  light: '#FFECED',
  main: '#FFECED',
  dark: '#FFB2B6',
  darker: '#FFECED',
  contrastText: '#FF3F48',
};

const INFO = {
  main: '#1076D4',
  contrastText: '#000000',
  0: '#E6F2FD',
  100: '#D1E6F9',
  200: '#BBD9F5',
  300: '#A6CDF1',
  400: '#90C0ED',
  500: '#66A8E4',
  600: '#3B8FDC',
  700: '#1076D4',
  800: '#0D5EAA',
  900: '#0A477F',
  1000: '#062F55',
  1100: '#052340',
  1200: '#03182A',
  1300: '#020C15',
  1400: '#000000',
};

const SUCCESS = {
  main: '#4ECD56',
  contrastText: GREY[800],
  0: '#FFFFFF',
  100: '#EDFAEE',
  200: '#DCF5DD',
  300: '#CAF0CC',
  400: '#B8EBBB',
  500: '#95E19A',
  600: '#71D778',
  700: '#4ECD56',
  800: '#40A846',
  900: '#318436',
  1000: '#235F27',
  1100: '#1C4D1F',
  1200: '#143B17',
  1300: '#0D280F',
  1400: '#061607',
};

const WARNING = {
  main: '#FFB63E',
  contrastText: GREY[800],
  0: '#FFFFFF',
  100: '#FFF8EC',
  200: '#FFF0D8',
  300: '#FFE9C5',
  400: '#FFE2B2',
  500: '#FFD38B',
  600: '#FFC565',
  700: '#FFB63E',
  800: '#D89932',
  900: '#B27D25',
  1000: '#8B6019',
  1100: '#785213',
  1200: '#65440C',
  1300: '#513506',
  1400: '#3E2700',
};

const ERROR = {
  main: '#F44336',
  contrastText: '#fff',
  0: '#FFFFFF',
  100: '#FEECEB',
  200: '#FDD9D7',
  300: '#FCC7C3',
  400: '#FBB4AF',
  500: '#F88E86',
  600: '#F6695E',
  700: '#F44336',
  800: '#CB372C',
  900: '#A32A21',
  1000: '#7A1E17',
  1100: '#661812',
  1200: '#52110C',
  1300: '#3D0B07',
  1400: '#290502',
};

const palette = {
  mode: 'light',
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
