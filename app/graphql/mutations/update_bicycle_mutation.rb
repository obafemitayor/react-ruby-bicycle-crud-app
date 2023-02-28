module Mutations
  class UpdateBicycleMutation < BaseMutation
    description "Updates a bicycle with a given id"

    argument :id, Integer, required: true,
      description: "The id of the bicycle to be updated"

    argument :brand, String, required: false,
      description: "The manufacturer's brand"

    argument :model, String, required: false,
      description: "The specific kind of bicycle"

    argument :size_centimeters, Integer, required: false,
      description: "The size of the bicycle's frame"

    argument :quantity, Integer, required: false,
      description: "The number of bicycles of this type that are available"

    field :bicycle, Types::BicycleType, null: true,
      description: "The bicycle that was updated, if the modification process was successful"
      
    field :error, String, null: true,
      description: "Contains user friendly error message if any error occurred during the modification process"

    def resolve(**arguments)
      validation_result = validate_input(arguments)

      if validation_result[:bicycle].nil?
        return validation_result
      end

      bicycle = validation_result[:bicycle]

      arguments.delete(:id)
      
      # There is no need to call the update function if there is nothing to update
      if arguments.empty?
        return { bicycle: bicycle, error: nil }
      end

      response = bicycle.update(arguments) ? { bicycle: bicycle, error: nil } : { bicycle: nil, error: "An error occurred while trying to update bicycle" }

      return response
    end

    private 
    
    def validate_input(arguments)
      response = {}

      bicycle_id = arguments[:id]

      bicycle = Bicycle.find_by(id: bicycle_id)

      if bicycle.nil?
        response[:bicycle] = nil
        response[:error] = "Could not find bicycle with ID #{bicycle_id}"
        return response
      end

      # To ensure that optional arguments have a value if they exist in the **arguments hash
      arguments.each do |key, value|
        if value.nil? || value == ""
          response[:bicycle] = nil
          response[:error] = "#{key} cannot be empty"
          return response
        end
      end

      response[:bicycle] = bicycle
      response[:error] = nil
      return response
    end

  end
end