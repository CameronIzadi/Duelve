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

  @houses = Category.create!(name: 'Houses')
  @townhomes = Category.create!(name: 'Townhomes')
  @condos = Category.create!(name: 'Condos')
  @multifamily = Category.create!(name: 'Multi-Family')
  @apartments = Category.create!(name: 'Apartments')




  @format = [@houses, @townhomes, @condos, @multifamily, @apartments]

  puts "#{Category.count} categories created."

  Property.create!(
    street: "1234 Test Street",
    price: 5000,
    bed: 2,
    bath: 3,
    sqft: 1234,
    seller_info: "Broke, Morgan Steet",
    amenities: "Wifi, Free breakfast",
    picture_1: "https://cf.bstatic.com/images/hotel/max1024x768/312/312698222.jpg",
    picture_2: "Random2",
    picture_3: "Random3",
    picture_4: "Random4",
    picture_5: "Random5",
    user: @gabriel,
    categories: [@houses],
  )


  Property.create!(
    street: "Pretty Home wow",
    price: 7000,
    bed: 3,
    bath: 5,
    sqft: 2400,
    seller_info: "More stuff org",
    amenities: "Free Money",
    picture_1: "https://photos.zillowstatic.com/fp/e8a9fea819687e22b0255ef52079c43e-p_e.jpg",
    picture_2: "Random2",
    picture_3: "Random3",
    picture_4: "Random4",
    picture_5: "Random5",
    user: @gabriel,
    categories: [@houses],
  )


  puts "#{Property.count} properties created."


