import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material"
import React from "react"

interface Props {
  title: string
  children: any
}

const Tip = (props: Props) => (
  <Accordion>
    <AccordionSummary>
      <Typography variant="h6">
        <strong>Q:</strong> {props.title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>{props.children}</AccordionDetails>
  </Accordion>
)

export default Tip
