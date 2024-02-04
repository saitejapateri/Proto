import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Checkbox(theme) {
  const color = theme.palette.grey[300];

  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
            // '& .MuiSvgIcon-root': {
            //     strokeWidth: 0, 
            //     stroke:theme.palette.grey[400],
            //   },
          '&:hover': {
            boxShadow: 'none', // Remove box shadow on hover
            backgroundColor:'transparent'
          },
          '&:focus': {
            boxShadow: 'none', // Remove box shadow on focus
            backgroundColor:'transparent'
          },
        },
      
      
        sizeMedium: {
          '& .MuiSvgIcon-root': {
            width: 21, // Decrease icon size
            heigth:21
          },
          
        },
        sizeSmall: {
          '& .MuiSvgIcon-root': {
            width: 10, // Decrease icon size
            heigth:10
          },
          
        },
      },
    },
  };
}
