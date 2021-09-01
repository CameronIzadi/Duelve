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
    street: "88 Livingston Drive",
    price: 80000,
    bed: 2,
    bath: 3,
    sqft: 3500,
    seller_info: "Keller Williams Inc.",
    amenities: "High Speed Wifi, Free Breakfast",
    picture_1: "https://cf.bstatic.com/images/hotel/max1024x768/312/312698222.jpg",
    picture_2: "https://photos.zillowstatic.com/fp/413926df865548728f4691ae7bed0ab0-cc_ft_768.webp",
    picture_3: "https://photos.zillowstatic.com/fp/17a4490fef4ec963cb3f9028b7579371-cc_ft_576.webp",
    picture_4: "https://photos.zillowstatic.com/fp/3fd01fd9e63ece12b52db85160f2373f-cc_ft_384.webp",
    picture_5: "https://photos.zillowstatic.com/fp/66a46853989108772f868beae677d3c6-cc_ft_384.webp",
    user: @gabriel,
    categories: [@houses],
  )


  Property.create!(
    street: "56 Jerimiah Road",
    price: 123000,
    bed: 3,
    bath: 5,
    sqft: 2400,
    seller_info: "Realtor Net",
    amenities: "Furniture Included",
    picture_1: "https://photos.zillowstatic.com/fp/e8a9fea819687e22b0255ef52079c43e-p_e.jpg",
    picture_2: "https://photos.zillowstatic.com/fp/73770afdec9d09531e6a6e18042536e8-cc_ft_576.webp",
    picture_3: "https://photos.zillowstatic.com/fp/356e84a16e69917aaf265a5d55c28b7e-cc_ft_384.webp",
    picture_4: "https://photos.zillowstatic.com/fp/cfc4e7095c18d0e51fd84f886eda32d3-cc_ft_384.webp",
    picture_5: "https://photos.zillowstatic.com/fp/ab77683f0847a98b5b089368dea2ac92-cc_ft_384.webp",
    user: @gabriel,
    categories: [@houses],
  )

  Property.create!(
    street: "88 Muhlenberg Ave",
    price: 503000,
    bed: 3,
    bath: 5,
    sqft: 3400,
    seller_info: "Realtor Net",
    amenities: "None",
    picture_1: "https://photos.zillowstatic.com/fp/2bc36d19be7744e7af6abe191ad6f402-cc_ft_768.webp",
    picture_2: "https://photos.zillowstatic.com/fp/c4480f9614cee84ad0bf73941d2cf75d-cc_ft_576.webp",
    picture_3: "https://photos.zillowstatic.com/fp/f6a996fa846f9cf1fda0837c04ad8f0f-cc_ft_576.webp",
    picture_4: "https://photos.zillowstatic.com/fp/71365544d363783614f93512e09c1fe3-cc_ft_384.webp",
    picture_5: "https://photos.zillowstatic.com/fp/cfe38dcf367cf665512a0caf68fa7ede-cc_ft_384.webp",
    user: @gabriel,
    categories: [@townhomes],
  )


  Property.create!(
    street: "72 forest lake",
    price: 631000,
    bed: 2,
    bath: 3,
    sqft: 2700,
    seller_info: "Realtor Net",
    amenities: "None",
    picture_1: "https://photos.zillowstatic.com/fp/1f4bad1ef54d14d81821ebb9441303b6-cc_ft_768.webp",
    picture_2: "https://photos.zillowstatic.com/fp/8f83f8049be6e375b9abe446c0cbf964-cc_ft_576.webp",
    picture_3: "https://photos.zillowstatic.com/fp/fc68f6aa72a463ece7ff39dc091fef44-cc_ft_576.webp",
    picture_4: "https://photos.zillowstatic.com/fp/be42b3b7fd4613a4030548232602d8e2-cc_ft_384.webp",
    picture_5: "https://photos.zillowstatic.com/fp/3a9d1591a5cf61a579544c026454b5d5-cc_ft_384.webp",
    user: @gabriel,
    categories: [@condos],
  )

  puts "#{Property.count} properties created."


