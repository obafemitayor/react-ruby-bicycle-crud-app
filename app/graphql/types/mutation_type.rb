module Types
  class MutationType < Types::BaseObject
    field :createBicycle, mutation: Mutations::CreateBicycleMutation
    field :updateBicycle, mutation: Mutations::UpdateBicycleMutation
    field :deleteBicycle, mutation: Mutations::DestroyBicycleMutation
  end
end
