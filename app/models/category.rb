class Category < ApplicationRecord
  has_and_belongs_to_many :properties, dependent: destroy
end
