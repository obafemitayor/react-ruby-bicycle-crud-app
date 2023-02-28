import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import React from "react"
import { graphql, useLazyLoadQuery } from "react-relay/hooks"
import BicycleRow from "./BicycleRow"
import NewBicycle from "./NewBicycle"
import { BicycleListQuery } from "./__generated__/BicycleListQuery.graphql"
import { useState } from "react"

const BicycleList = () => {
  const data = useLazyLoadQuery<BicycleListQuery>(
    graphql`
      query BicycleListQuery {
        bicycles(first: 100) @connection(key: "BicycleList_bicycles") {
          __id
          edges {
            node {
              id
              ...BicycleRow_bicycle
            }
          }
        }
      }
    `,
    {}
  )

  const [index] = useState(0)

  return (
    <TableContainer sx={{ marginTop: 2 }} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Quantity Available</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.bicycles?.edges?.map(({ node: b }, index) => (
            <BicycleRow key={b.id} bicycle={b} connectionID={data.bicycles?.__id} index={index + 1} />
          ))}
          <NewBicycle connectionID={data.bicycles?.__id} />
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BicycleList
