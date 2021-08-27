class CreateJoinTablePropertyCategory < ActiveRecord::Migration[6.1]
  def change
    create_join_table :properties, :categories do |t|
      # t.index [:property_id, :category_id]
      # t.index [:category_id, :property_id]
    end
  end
end
