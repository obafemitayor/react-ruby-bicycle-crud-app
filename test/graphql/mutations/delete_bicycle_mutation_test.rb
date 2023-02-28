require 'test_helper'

class DeleteBicycleMutationTest < ActiveSupport::TestCase

  def setup
    @bicycle = Bicycle.create(brand: 'Tayo Brand Bicycle',
      model: 'Tayo Model',
      size_centimeters: 60,
      quantity: 2)
  end

  def teardown
    @bicycle.destroy
  end

  test 'delete bicycle mutation should return error message in message field when trying to delete a bicycle that does not exist' do
    response = delete_bicycle(id: 99)

    assert_not_nil response[:message]

    assert_equal response[:message], "Could not find bicycle with ID 99"
  end

  test 'update bicycle mutation should return a successful response when updating only size and quantity' do
    response = delete_bicycle(id: @bicycle.id)
    
    assert_not_nil response[:message]

    assert_equal response[:message], "Record deleted successfully"
  end

  private

  def delete_bicycle(**args)
    Mutations::DestroyBicycleMutation.new(object: nil, field: nil, context: {}).resolve(**args)
  end

end