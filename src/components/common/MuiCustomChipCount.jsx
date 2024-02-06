
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
        height: '20px',
        borderRadius : 0,
        mb:'2px',
        background:(theme)=>selected ? props.bgcolor :theme.palette.grey[100],
        color:selected ? props.color :'#919EAB',
        fontSize:'14px',
        ml:0.5,
        ...props,
        '& .MuiChip-label': {
          p: '4px 6px', 
        },
      }}
      label={label} />
        
  )
}
