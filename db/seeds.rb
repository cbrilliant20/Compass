# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Trip.destroy_all
Itinerary.destroy_all

@user = User.create!(username: 'Cameron', email: 'cameron@ga.com', password: '123456')

puts "#{User.count} users created"

@new_york = Trip.create!(name: 'Birthday', location:'New York, NY', date_start: "2021-08-20", date_end: "2021-08-29", img_url: 'https://static.onecms.io/wp-content/uploads/sites/28/2021/02/19/new-york-city-evening-NYCTG0221.jpg', user: @user)
@las_vegas = Trip.create!(name: 'Bachelor Party', location:'Las Vegas, NV', date_start: "2021-07-15", date_end: "2021-07-18", img_url: 'https://a.cdn-hotels.com/cos/heroimage/Las_Vegas_0_535829219.jpg?impolicy=fcrop&w=536&h=384&q=high', user: @user)
@amsterdam = Trip.create!(name: 'Euro Trip', location:'Amsterdam, NL', date_start: "2021-10-01", date_end: "2021-10-15", img_url: 'https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2017/05/Amsterdam-www.istockphoto.jpg', user: @user)

puts "#{Trip.count} trips created"

@ellis_island = Itinerary.create!(name: 'Ellis Island', location:'New York, NY', date_start: "2021-08-21", trip: @new_york)
@empire= Itinerary.create!(name: 'Empire State Building', location:'New York, NY', date_start: "2021-08-23", trip: @new_york)

@casino= Itinerary.create!(name: 'Casino', location:'Caesars Palace', date_start: "2021-07-16", trip: @las_vegas)
@circus= Itinerary.create!(name: 'Circus', location:'The Wynn', date_start: "2021-07-18", trip: @las_vegas)

@biking= Itinerary.create!(name: 'Biking', location:'Vondel Park', date_start: "2021-10-07", trip: @amsterdam)
@garden= Itinerary.create!(name: 'Tulip Gardens', location:'Keukenhof', date_start: "2021-10-10", trip: @amsterdam)

puts "#{Itinerary.count} itineraries created"