import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function TextField(theme) {
  const color = theme.palette.grey[200]
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          border: `1px solid ${color}`,
          '&:hover': {
            border: `1px solid #637381`, 
          },
          // '& .Mui-focused': {
          //   border: '1.5px solid #212B36',
          // },
        },
      },
    },
   
    MuiInputBase: {
      styleOverrides: {
        root: {
          // '&:hover': {
          //   border: `1px solid #637381`, 
          // },
          // '&.Mui-focused': {
          //   border: '1.5px solid #212B36',
          // },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'none', 
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border:'none',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'none',
            border:'none'
          },
        },
     
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main, 
        },
      },
    },

  }
}
