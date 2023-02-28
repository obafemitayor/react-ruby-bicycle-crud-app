import { CircularProgress, Container, ContainerProps } from "@mui/material"
import React from "react"

const Loading = (props: ContainerProps) => (
  <Container {...props} sx={{display: "flex", alignItems: "center", justifyContent: "center", ...props?.sx}}>
    <CircularProgress />
  </Container>
)

export default Loading