import {graphql,commitMutation} from 'react-relay'
import { GraphQLTaggedNode} from 'relay-runtime'
import environment from '../relay/RelayEnvironment'

const genericErrorMessage = 'An error occurred while trying to update this record, please try again'

const updateBicycleMutation = graphql`
mutation UpdateBicycleMutation($input: UpdateBicycleMutationInput!) {
  updateBicycle(input: $input) {
    bicycle {
      id
      brand
      model
      sizeCentimeters
      quantity
    }
  clientMutationId
  error
  }
}
`

const validateBicycleModel = (bicycleId, updateBicycleModelMap) => {
  const updateBicycleMap = updateBicycleModelMap as Map<string,any>

  const validationResult = {
    error: null,
    updateBicycleMap: null
  }

  // Validate that optional inputs sent to the server should have a value
  updateBicycleMap.forEach((value: any, key: string) => {
    if(!value){
      validationResult.error = `${key} must have a value`
      return validationResult
    }
    if(typeof value === 'string' && value.length === 0){
      validationResult.error = `${key} must have a value`
      return validationResult
    }
    if(key === 'sizeCentimeters'){
      updateBicycleMap.set('sizeCentimeters',Number(value))
    }
    else if(key === 'quantity'){
      updateBicycleMap.set('quantity',Number(value))
    }
  })

  updateBicycleMap.set('id', Number(bicycleId))

  validationResult.updateBicycleMap = updateBicycleMap

  return validationResult
}

const handleOnCompleted = (response, callBackActions) => {
  const {setIsEditing, setBicycleModel, initialBicycleState} = callBackActions
  setIsEditing(false)
  if(response.updateBicycle.error){
    setBicycleModel(initialBicycleState)
    alert(response.updateBicycle.error)
  }
}

const handleOnError = (err, callBackActions) => {
  const {setIsEditing, setBicycleModel, initialBicycleState} = callBackActions
  setBicycleModel(initialBicycleState)
  setIsEditing(false)
  const message = err.updateBicycle ? err.updateBicycle.error : genericErrorMessage
  alert(message)
}

const buildMutationVariables = (updateBicycleMap)=>{
  const updateBicycleModel = Object.fromEntries(updateBicycleMap)
  const variables = {
    input: updateBicycleModel,
  }
  return {variables}
}

const updateBicycle = (args) => {
  const {bicycleId, updateBicycleModelMap, 
    setBicycleModel,setIsEditing,initialBicycleState} = args
    
  const mutation = updateBicycleMutation as GraphQLTaggedNode
  
  const validationResult = validateBicycleModel(bicycleId, updateBicycleModelMap)
  
  if(validationResult.error){
    alert(validationResult.error)
    return
  }
  
  const {updateBicycleMap} = validationResult
  
  if(updateBicycleMap.size === 1){
    // There is nothing to update so no need to call the server 
    return
  }
  
  const {variables} = buildMutationVariables(updateBicycleMap)
  
  const callBackActions = {setBicycleModel, setIsEditing, initialBicycleState}
  
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => handleOnCompleted(response, callBackActions),
      onError: err => handleOnError(err,callBackActions),
    })
}

export default updateBicycle