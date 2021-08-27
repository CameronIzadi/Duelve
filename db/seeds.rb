# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.destroy_all
Property.destroy_all
User.destroy_all

@gabriel =
  User.create!(
    username: 'Gabe',
    email: 'ben@ben.io',
    password: '123456',
  )

  puts "#{User.count} users created."

  @standard = Category.create!(name: 'standard')
  @modern = Category.create!(name: 'modern')

  @format = [@standard, @modern]

  puts "#{Category.count} categories created."

  Property.create!(
    street: "1234 Test Street",
    price: 5000,
    bed: 2,
    bath: 3,
    sqft: 1234,
    seller_info: "Broke, Morgan Steet",
    amenities: "Wifi, Free breakfast",
    picture_1: "Random1",
    picture_2: "Random2",
    picture_3: "Random3",
    picture_4: "Random4",
    picture_5: "Random5",
    user: @gabriel,
    categories: [@standard],
  )



  puts "#{Property.count} properties created."


