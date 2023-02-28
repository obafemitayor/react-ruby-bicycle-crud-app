require 'test_helper'

class UpdateBicycleMutationTest < ActiveSupport::TestCase
 
  def setup
    @bicycle = Bicycle.create(brand: 'Tayo Brand Bicycle',
      model: 'Tayo Model',
      size_centimeters: 60,
      quantity: 2)
  end

  def teardown
    @bicycle.destroy
  end

  test 'update bicycle mutation should return an empty bicycle model and an error response when the mutation recieves an invalid id' do
    response = update_bicycle(
      id: 99,
      size_centimeters: 60,
      quantity: 7
    )

    assert_nil response[:bicycle]

    assert_not_nil response[:error]

    assert_equal response[:error], "Could not find bicycle with ID 99"
  end

  test 'update bicycle mutation should return a successful response when updating only size and quantity' do
    response = update_bicycle(
      id: @bicycle.id,
      size_centimeters: 80,
      quantity: 7
    )

    assert_not_nil response[:bicycle]

    assert_equal response[:bicycle][:brand], "Tayo Brand Bicycle"

    assert_equal response[:bicycle][:model], "Tayo Model"

    assert_equal response[:bicycle][:size_centimeters], 80

    assert_equal response[:bicycle][:quantity], 7
  end

  test 'update bicycle mutation should return a successful response when updating only brand' do
    response = update_bicycle(
      id: @bicycle.id,
      brand: 'New Tayo Brand Bicycle'
    )
    
    assert_not_nil response[:bicycle]

    assert_equal response[:bicycle][:brand], "New Tayo Brand Bicycle"

    assert_equal response[:bicycle][:model], "Tayo Model"

    assert_equal response[:bicycle][:size_centimeters], 60

    assert_equal response[:bicycle][:quantity], 2
  end

  test 'update bicycle mutation should update only brand even when an argument with a nil value is passed' do
    response = update_bicycle(
      id: @bicycle.id,
      brand: 'A Brand New Tayo Bicycle',
      model: nil
    )

    assert_nil response[:bicycle]
    
    assert_not_nil response[:error]

    assert_equal response[:error], "model cannot be empty"

  end

  test 'update bicycle mutation should return a successful response when no arguments is sent for an update' do
    response = update_bicycle(
      id: @bicycle.id
    )

    assert_not_nil response[:bicycle]

    assert_equal response[:bicycle][:brand], "Tayo Brand Bicycle"

    assert_equal response[:bicycle][:model], "Tayo Model"

    assert_equal response[:bicycle][:size_centimeters], 60

    assert_equal response[:bicycle][:quantity], 2
  end

  private

  def update_bicycle(**args)
    Mutations::UpdateBicycleMutation.new(object: nil, field: nil, context: {}).resolve(**args)
  end

end