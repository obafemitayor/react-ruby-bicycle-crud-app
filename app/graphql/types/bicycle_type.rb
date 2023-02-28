module Types
  class BicycleType < BaseObject
    graphql_name "Bicycle"

    field :id, ID, null: false,
      description: "The ID of the Bicycle"

    field :brand, String, null: true,
      description: "The brand name of the bicycle"

    field :model, String, null: true,
      description: "The model name of the bicycle"

    field :size_centimeters, Integer, null: true,
      description: "The size of the bicycle"

    field :quantity, Integer, null: true,
      description: "The quantity of this bicycle in stock"
  end
end