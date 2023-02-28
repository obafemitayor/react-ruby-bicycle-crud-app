module Mutations
  class DestroyBicycleMutation < BaseMutation
    description "Deletes a bicycle with a given id"

    argument :id, Integer, required: true,
      description: "The id of the bicycle to be deleted"

    field :message, String, null: false

    field :deleted_id, ID, null: false

    def resolve(id: nil)
      response = {
        deleted_id: id
      }

      bicycle = Bicycle.find_by(id: id)

      if bicycle.nil?
        response[:message] = "Could not find bicycle with ID #{id}"
        return response
      end

      response[:message] = bicycle.destroy ? 'Record deleted successfully' : 'An error occurred while trying to delete record'

      return response
    end
  end
end