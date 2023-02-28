import {graphql, commitMutation} from 'react-relay'
import { GraphQLTaggedNode} from 'relay-runtime'
import environment from '../relay/RelayEnvironment'

const genericErrorMessage = 'An error occurred while trying to delete this record, please try again'

const deleteBicyclemutation = graphql`
mutation DeleteBicycleMutation(
  $connections: [ID!]!
  $input: DestroyBicycleMutationInput!
) {
  deleteBicycle(input: $input) {
    clientMutationId
    message
    deletedId @deleteEdge(connections: $connections)
  }
}
`
const handleOnCompleted = async (response, setDialogOpen) =>{
  setDialogOpen(false)
  alert(response.deleteBicycle.message)
}

const handleOnError = (err, setDialogOpen) =>{
  setDialogOpen(false)
  const message = err.deleteBicycle ? err.deleteBicycle.message : genericErrorMessage
  alert(message)
}

const deleteBicycle = (args) => {
  const {bicycleId, setDialogOpen, connectionID} = args

  const variables = {
    input: {
      id: Number(bicycleId)
    },
    connections: [connectionID]
  }

  const mutation = deleteBicyclemutation as GraphQLTaggedNode
  
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => handleOnCompleted(response, setDialogOpen),
      onError: err => handleOnError(err, setDialogOpen),
    },
  )
}

export default deleteBicycle