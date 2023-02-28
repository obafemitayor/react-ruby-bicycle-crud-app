class CreateBicycles < ActiveRecord::Migration[7.0]
  def change
    create_table :bicycles do |t|
      t.string :brand
      t.string :model
      t.integer :size_centimeters
      t.integer :quantity

      t.timestamps
    end
  end
end
