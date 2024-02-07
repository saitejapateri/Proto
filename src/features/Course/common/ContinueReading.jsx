import React from 'react'
import {Typography, Stack, Grid, Box} from '@mui/material'
import CustomCard from '../../../components/common/CustomCard';

function ContinueReading({continue_reading}) {

  const handlePdfClick = (url) => {
    console.log("pdf clicked ",url);
  }

  return <Grid item md={10} sx={{marginLeft : '3.5rem', marginTop : '2.93rem'}}>
    <Typography variant='h5'>Continue Reading</Typography>
    <Box sx={{display : 'flex', gap : '1.375rem', marginTop : '0.75rem'}}>
        {
            continue_reading.map((pdf) => (
                <Stack key={pdf.id}>
                    <CustomCard name={pdf.name} onClick={()=>handlePdfClick(pdf.url)}/>
                </Stack>
            ))
        }
    </Box>
  </Grid>
}

export default ContinueReading