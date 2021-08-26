class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :name
      t.integer :price
      t.integer :sqft
      t.integer :bed
      t.integer :bath
      t.string :street
      t.string :seller_info
      t.string :amenities

      t.timestamps
    end
  end
end
