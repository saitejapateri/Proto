import React, {useState} from 'react'
import {Box, Grid, Tab, Tabs, Stack} from '@mui/material'
import MuiCustomUnitsTab from '../../../components/common/MuiCustomUnitsTab.jsx'


function UnitsContainer({units}) {

    const [value,setValue] = useState(0);

    const handleTab = (event, newValue) => {
        setValue(newValue);
    }

  return <Grid item md={8} sx={{marginLeft : '3.5rem', marginTop : '1.25rem'}}>
    <Box bgcolor='primary.light'>
        <Tabs value={value} onChange={handleTab}>
            {
                units.map((unit) => (
                    <Tab key={unit.id} label={unit.unit_name}/>
                ))
            }
        </Tabs>
    </Box>
  </Grid>
}

export default UnitsContainer;
