import { Box, Typography } from '@mui/material'
import React from 'react'
import documentImg  from '../../images/document.svg'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import palette from '../../theme/palette';

const CustomCard = ({ name, onClick,width = '285px', height = '80px' }) => {
    return (
        <Box sx={{
            width: width,
            height: height,
            border : `1px solid ${palette.grey[100]}`,
            boxShadow: '10px 10px 32px -4px rgba(16, 24, 40, 0.04);',
            display : 'flex',
            borderRadius : '10px',
            gap : '15px',
            paddingRight : '2.28rem',
            cursor : 'pointer'
        }} alignItems={'center'} onClick={onClick}>
            <>
            <Box sx={{backgroundColor : palette.grey[200],padding : '0.9375rem',marginLeft : '0.625rem', borderRadius : '5px'}}>
                <img src={documentImg} alt="" />
            </Box>
            <Typography variant='subtitle2'>{name}</Typography>
            <ArrowForwardOutlinedIcon />
            </>
        </Box>
    )
}

export default CustomCard