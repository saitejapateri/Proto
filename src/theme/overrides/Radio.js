import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Radio(theme) {
  const color = theme.palette.grey[300];

  return {
    MuiRadio: {
      styleOverrides: {
        root: {
            '& .MuiSvgIcon-root': {
                strokeWidth: 0, 
                stroke:theme.palette.grey[400],
              },
          '&:hover': {
            boxShadow: 'none', // Remove box shadow on hover
            backgroundColor:'transparent'
          },
          '&:focus': {
            boxShadow: 'none', // Remove box shadow on focus
            backgroundColor:'transparent'
          },
        },
        // colorPrimary: {
        //   '&.Mui-checked': {
        //     '&:hover': {
        //       boxShadow: 'none', // Remove box shadow on hover when checked
        //       backgroundColor:'transparent'
        //     },
        //     '&:focus': {
        //       boxShadow: 'none', // Remove box shadow on focus when checked
        //       backgroundColor:'transparent'
        //     },
        //   },
        // },
        // colorSecondary: {
        //   '&.Mui-checked': {
        //     '&:hover': {
        //       boxShadow: 'none', // Remove box shadow on hover when checked
        //       backgroundColor:'transparent'
        //     },
        //     '&:focus': {
        //       boxShadow: 'none', // Remove box shadow on focus when checked
        //       backgroundColor:'transparent'
        //     },
        //   },
        // },
        sizeLarge: {
            '& .MuiSvgIcon-root': {
              width: 25.6, 
              heigth:25.6,
              strokeWidth: 0, 
              stroke:theme.palette.grey[400],
              borderColor: 'red',
            }
            },
        sizeMedium: {
          '& .MuiSvgIcon-root': {
            width: 21, // Decrease icon size
            heigth:21
          },
          
        },
        sizeMedium: {
          '& .MuiSvgIcon-root': {
            width: 10, // Decrease icon size
            heigth:10
          },
          
        },
      },
    },
  };
}
