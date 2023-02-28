module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :bicycles, Types::BicycleType.connection_type, null: false,
      description: "All the bicycles in the database"

    def bicycles
      ::Bicycle.all.order(id: :asc)
    end
  end
end
