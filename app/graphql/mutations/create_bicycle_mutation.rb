module Mutations
  class CreateBicycleMutation < BaseMutation
    description "Creates a new bicycle"

    argument :brand, String, required: true,
      description: "The manufacturer's brand"

    argument :model, String, required: true,
      description: "The specific kind of bicycle"

    argument :size_centimeters, Integer, required: true,
      description: "The size of the bicycle's frame"

    argument :quantity, Integer, required: true,
      description: "The number of bicycles of this type that are available"

    field :bicycle, Types::BicycleType, null: true,
      description: "The bicycle that was created, if the creation process was successful"
      
    field :error, String, null: true,
      description: "Contains user friendly error message if any error occurred during the modification process"

    def resolve(**arguments)
      bicycle = Bicycle.create(arguments)

      response = bicycle.persisted? ? { bicycle: bicycle, error: nil } : { bicycle: nil, error: "An error occurred while trying to create bicycle" }

      return response
    end
  end
end