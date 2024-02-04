// ----------------------------------------------------------------------

export default function Autocomplete(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          marginTop:'2rem',
          borderRadius: '10px',
          border: '1px solid #F4F6F8',
          background: '#FFF',
          boxShadow: '3.79444px 3.79444px 14.22917px 0px rgba(0, 0, 0, 0.05)',
        },
      },
      overrides: {
        MuiChip: {
          root: {
            '&.MuiAutocomplete-tag': {
              borderRadius: '46px',
            },
          },
        },
      },
    },
  };
}
