
import React, { useState } from 'react';
import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

MuiCustomChipCount.defaultProps = {
  label : 0,
  selected:true,
  padding: '3px 4px 1px 4px'
}

export default function MuiCustomChipCount({label,selected,padding,...props}) {
  return (
    <Chip  sx={{
        width: 'auto',
        height: '16px',
        mb:'2px',
        background:(theme)=>selected ?theme.palette.grey[400]:theme.palette.grey[100],
        color:selected ?'#fff':'#919EAB',
        fontSize:'12px',
        ml:0.5,
        ...props,
        '& .MuiChip-label': {
          p: padding, 
        },
      }}
      label={label} />
        
  )
}
