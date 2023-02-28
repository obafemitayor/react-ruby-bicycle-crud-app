import { Delete, Edit, Cancel, Save } from "@mui/icons-material"
import { TableRow, TableCell, IconButton, Button,  Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material"
import React from "react"
import { graphql, useFragment } from "react-relay/hooks"
import { BicycleRow_bicycle$data, BicycleRow_bicycle$key } from "./__generated__/BicycleRow_bicycle.graphql"
import { useState } from "react"
import BicycleCell from "./BicycleCell"
import updateBicycle from "../../utils/UpdateBicycle"
import deleteBicycle from "../../utils/DeleteBicycle"

interface Props {
  bicycle: BicycleRow_bicycle$key,
  connectionID: string,
  index: number
}

const BicycleRow = (props: Props) => {
  const bicycle = useFragment(
    graphql`
      fragment BicycleRow_bicycle on Bicycle {
        id
        brand
        model
        sizeCentimeters
        quantity
      }
    `,
    props.bicycle
  )

  /*This map is used to hold the properties of the bicycle that was updated.
  This allows us to send only properties that was updated instead of sending 
  the entire properties for the update
  */
  const [updateBicycleModelMap, setUpdateBicycleModelMap] = useState(new Map<string,BicycleRow_bicycle$data>())
  
  const [isEditing, setIsEditing] = useState(false)

  const [bicycleModel, setBicycleModel] = useState<BicycleRow_bicycle$data>(bicycle)

  const [isDialogOpen, setDialogOpen] = useState(false)

  const handleEditBicycle = () => setIsEditing(true)

  const handleDeleteBicycle = () => setDialogOpen(true)

  const handleCancelEditBicycle = () => {
    setIsEditing(false)
    setBicycleModel(bicycle)
  }

  const getArgumentsForUpdateBicycle = () => {
    const initialBicycleState = bicycle
    return {bicycleId: bicycleModel.id, 
      updateBicycleModelMap, 
      setBicycleModel,
      setIsEditing,
      initialBicycleState
    }
  }

  const getArgumentsForDeleteBicycle = () => {
    return {bicycleId: bicycleModel.id,
      setDialogOpen,
      connectionID: props.connectionID
    }
  }

  const getPropsForBicycleCellComponent = (name) => {
    const bicycleCellArguments = {
      name, 
      isEditing,
      updateBicycleModelMap,
      setUpdateBicycleModelMap,
      bicycleModel,
      setBicycleModel
    }
    return bicycleCellArguments
  }

  return (
    <TableRow>
      <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Are you sure you want to delete this bicycle?</DialogTitle>
        <DialogContent>
          <p>Please confirm if you want to delete this bicycle.</p>
        </DialogContent>
        <DialogActions>
        <Button variant="contained" color="success" onClick={() => deleteBicycle(getArgumentsForDeleteBicycle())}>
              Yes 
        </Button>
        <Button variant="contained" color="error" onClick={() => setDialogOpen(false)}>
              No
       </Button>
        </DialogActions>
     </Dialog>

      <TableCell>{props.index}</TableCell>
      <BicycleCell args = {getPropsForBicycleCellComponent('brand')} />
      <BicycleCell args = {getPropsForBicycleCellComponent('model')} />
      <BicycleCell args = {getPropsForBicycleCellComponent('sizeCentimeters')} />
      <BicycleCell args = {getPropsForBicycleCellComponent('quantity')} />
      <TableCell sx={{ width: 100 }}>
        {isEditing ? (
          <>
            <IconButton onClick={() => updateBicycle(getArgumentsForUpdateBicycle())}> 
              <Save />
            </IconButton>
            <IconButton onClick={handleCancelEditBicycle}>
              <Cancel />
            </IconButton>
          </>
        ) : (
          <IconButton onClick={handleEditBicycle}>
            <Edit />
          </IconButton>
        )}
        {!isEditing && (<IconButton onClick={handleDeleteBicycle}>
          <Delete />
          </IconButton>)}
      </TableCell>
    </TableRow>
  )
}

export default BicycleRow