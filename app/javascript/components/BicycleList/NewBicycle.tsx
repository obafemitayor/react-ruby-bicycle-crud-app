import { Button, TableCell, TableRow, TextField } from "@mui/material"
import React, { Ref } from "react"
import { useState } from "react"
import { graphql, useMutation } from "react-relay/hooks"
import { NewBicycleMutation } from "./__generated__/NewBicycleMutation.graphql"

interface Props {
  // Relay ID of the connection to append the new bicycle to after it is created
  // See https://relay.dev/docs/guided-tour/list-data/updating-connections/#appendnode--prependnode
  connectionID: string
}

const NewBicycle = (props: Props) => {
  // State variables
  const [brand, setBrand] = useState<string>(null)
  const [model, setModel] = useState<string>(null)
  const [sizeCentimeters, setSizeCentimeters] = useState<number>(null)
  const [quantity, setQuantity] = useState<number>(null)

  // Relay mutation to create a new Bicycle in the backend
  const [commitMutation, isMutationInFlight] = useMutation<NewBicycleMutation>(
    graphql`
      mutation NewBicycleMutation(
        $connections: [ID!]!
        $input: CreateBicycleMutationInput!
      ) {
        createBicycle(input: $input) {
          bicycle
            @appendNode(
              connections: $connections
              edgeTypeName: "BicycleEdge"
            ) {
            ...BicycleRow_bicycle
          }
        }
      }
    `
  )

  // Handler function to actually call the mutation
  const createBicycle = () => {
    commitMutation({
      variables: {
        input: {
          brand,
          model,
          sizeCentimeters,
          quantity,
        },
        connections: [props.connectionID],
      },
      onCompleted(response, errors) {
        setBrand(null)
        setModel(null)
        setSizeCentimeters(null)
        setQuantity(null)
      },
    })
  }

  return (
    <TableRow>
      <TableCell></TableCell>
      <TableCell>
        <TextField
          value={brand || ""}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Brand"
        />
      </TableCell>
      <TableCell>
        <TextField
          value={model || ""}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model"
        />
      </TableCell>
      <TableCell>
        <TextField
          value={sizeCentimeters || ""}
          type="number"
          onChange={(e) => setSizeCentimeters(Number(e.target.value))}
          placeholder="Size (cm)"
        />
      </TableCell>
      <TableCell>
        <TextField
          value={quantity || ""}
          type="number"
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="Quantity"
          onKeyDown={(e) => e.key === "Enter" && createBicycle()}
        />
      </TableCell>
      <TableCell>
        <Button
          variant="contained"
          onClick={createBicycle}
          disabled={isMutationInFlight}
        >
          Add
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default NewBicycle
