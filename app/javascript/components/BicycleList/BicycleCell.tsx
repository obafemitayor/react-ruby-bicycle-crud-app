import React from "react"
import { TableCell, TextField} from "@mui/material"
import { BicycleRow_bicycle$data } from "./__generated__/BicycleRow_bicycle.graphql"

type BicycleCellArguments={
    name: string,
    isEditing: Boolean,
    updateBicycleModelMap: Map<string,BicycleRow_bicycle$data>,
    setUpdateBicycleModelMap: Function,
    bicycleModel: BicycleRow_bicycle$data,
    setBicycleModel: Function,
}

type BicycleCellProps={
  args: BicycleCellArguments,
}

const BicycleCell = (props: BicycleCellProps) => {
  const{name, isEditing, updateBicycleModelMap, 
    setUpdateBicycleModelMap, 
    bicycleModel, setBicycleModel} = props.args
  const value = bicycleModel[name]

  const handleOnChange = (value) => {
    const updateModel = {...bicycleModel}

    updateModel[name] = value

    setBicycleModel(updateModel)

    updateBicycleModelMap.set(name,value)
    
    setUpdateBicycleModelMap(updateBicycleModelMap)
  }
  
  if (isEditing) {
    return (
    <TableCell>
      <TextField value={value} onChange={(e) => handleOnChange(e.target.value)} />
    </TableCell>
    )
  }
  
  return <TableCell>{value}</TableCell>
}

export default BicycleCell