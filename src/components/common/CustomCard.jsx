import { Box } from '@mui/material'
import React from 'react'
import rightButton from '../../images/rightbutton.svg'
import documentImg from '../../images/document.svg'
import './CustomCard.css'

const CustomCard = ({ name,url, onClick}) => {

    return (
        <Box sx={{
            width: '285px',
            height: '80px',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0px 0px 15px 0px rgba(16, 24, 40, 0.04)',
            cursor : 'pointer'
        }}>
            <div id="pdf-div" onClick={onClick}>
                <span id="document-img"><img src={documentImg}/></span>
                <span id="pdf-name">{name}</span>
                <span id="right-button"><img src={rightButton}/></span>
            </div>
        </Box>
    )
}

export default CustomCard