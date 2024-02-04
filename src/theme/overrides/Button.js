import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
            boxShadow: 'none',
          
            // padding:0,
            '&$active': {
              // Customize the styles for the active state
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
             
            },
           
            
        },
        hover: {
          backgroundColor: 'transparent',
          // Your styles for the hover class here
        },
        sizeLarge: {
          height: 45,
          borderRadius:'10px',
          fontSize:'15px',
          fontWeight:'300',
          // width:170
        },
        sizeMedium: {
          height: 35, 
          borderRadius:'5px',
          fontSize:'12px',
          fontWeight:'300',
        },
        sizeSmall: {
          height:30,
          fontWeight:'300',
          // width:80
        },
      
        containedInherit: {
          color: 'rgb(220 48 48)',
          // boxShadow: theme.customShadows.z8,
        //   '&:hover': {
        //     backgroundColor: theme.palette.grey[400],
        //   },
          '&$disabled': {
            backgroundColor: theme.palette.action.disabled, // Customize the background color for the disabled state
            color: theme.palette.grey[800], // Customize the text color for the disabled state
          },
        },
        containedPrimary: {
          // boxShadow: theme.customShadows.primary,
          backgroundColor: theme.palette.primary.main,
          '&$hover': {
            backgroundColor: theme.palette.primary[1000],
           
          },
        },
        containedSecondary: {
          // boxShadow: theme.customShadows.secondary,
          backgroundColor: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: theme.palette.secondary.darker,
           
          },
        },
        disabledPrimary: {
          backgroundColor: theme.palette.grey[200],
          color:theme.palette.grey[400],
        },
        disabledSecondary: {
          backgroundColor: theme.palette.grey[200],
          color:theme.palette.grey[400],
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
