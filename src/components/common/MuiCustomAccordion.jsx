import React from 'react'
import {Accordion, AccordionDetails, AccordionSummary} from '@mui/material'

function MuiCustomAccordion({topic_name, materials}) {
  return <Accordion>
    <AccordionSummary>
        {topic_name}
    </AccordionSummary>
    {
        materials.map((material) => (
            <AccordionDetails key={material.id}>
                {material.name}
            </AccordionDetails>
        ))
    }
  </Accordion>
}

export default MuiCustomAccordion
