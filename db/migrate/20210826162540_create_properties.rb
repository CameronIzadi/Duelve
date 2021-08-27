class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :street
      t.integer :price
      t.integer :bed
      t.integer :bath
      t.integer :sqft
      t.string :seller_info
      t.string :amenities
      t.string :picture_1
      t.string :picture_2
      t.string :picture_3
      t.string :picture_4
      t.string :picture_5
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
