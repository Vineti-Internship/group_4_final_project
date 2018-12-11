User.destroy_all
User.create!(name:'Admin',    email:'admin@mail.com',    role:'admin',     password:'123456', password_confirmation:'123456')
User.create!(name:'Benedict', email:'benedict@mail.com', role:'l_manager', password:'123456', password_confirmation:'123456')
User.create!(name:'Eduardo',  email:'eduardo@mail.com',  role:'f_manager', password:'123456', password_confirmation:'123456')
User.create!(name:'Leila',    email:'leila@mail.com',    role:'client',    password:'123456', password_confirmation:'123456')
User.create!(name:'Arpi',     email:'arpi@mail.com',     role:'client',    password:'123456', password_confirmation:'123456')
User.create!(name:'mane',     email:'mane@mail.com',     role:'client',    password:'123456', password_confirmation:'123456')
User.create!(name:'armine',   email:'armine@mail.com',   role:'client',    password:'123456', password_confirmation:'123456')
User.create!(name:'John',     email:'john@mail.com',     role:'client',    password:'123456', password_confirmation:'123456')
User.create!(name:'Fleur',    email:'fleur@mail.com',    role:'client',    password:'123456', password_confirmation:'123456')
            
puts "#{User.count} users created succesfully!"

Airline.destroy_all
aeroflot = Airline.create!(name:'Aeroflot Russian Airlines')
s7 = Airline.create!(name:'S7 Airlines')
flying_route = Airline.create!(name:'Airlines Flying Route')
middle_east = Airline.create!(name:'Middle East Airlines')

puts "#{Airline.count} airlines created succesfully!"

Airplane.destroy_all
Airplane.create!(name:'airplane 1',  model:'MK3OR', status:'FREE', country:'Armenia',time_on_lane:30.minutes.from_now, capacity: 100, airline_id:aeroflot.id)
Airplane.create!(name:'airplane 2',  model:'MA9OR', status:'FREE', country:'Armenia',time_on_lane:30.minutes.from_now, capacity: 200, airline_id:aeroflot.id)
Airplane.create!(name:'airplane 3',  model:'MBWOR', status:'FREE', country:'Armenia',time_on_lane:30.minutes.from_now, capacity: 300, airline_id:aeroflot.id)
Airplane.create!(name:'airplane 4',  model:'MK8OR', status:'FREE', country:'Armenia',time_on_lane:30.minutes.from_now, capacity: 400, airline_id:aeroflot.id)
Airplane.create!(name:'airplane 5',  model:'MK3OR', status:'FREE', country:'Armenia',time_on_lane:30.minutes.from_now, capacity: 400, airline_id:s7.id)
Airplane.create!(name:'airplane 6',  model:'MA9OR', status:'FREE', country:'Armenia',time_on_lane:30.minutes.from_now, capacity: 500, airline_id:s7.id)
Airplane.create!(name:'airplane 7',  model:'MBWOR', status:'FREE', country:'Armenia',time_on_lane:30.minutes.from_now, capacity: 500, airline_id:s7.id)
Airplane.create!(name:'airplane 8',  model:'MK8OR', status:'FREE', country:'Armenia',time_on_lane:30.minutes.from_now, capacity: 500, airline_id:flying_route.id)
Airplane.create!(name:'airplane 9',  model:'MA9OR', status:'FREE', country:'Armenia',time_on_lane:30.minutes.from_now, capacity: 600, airline_id:flying_route.id)
Airplane.create!(name:'airplane 10', model:'MBWOR', status:'FREE', country:'Armenia',time_on_lane:30.minutes.from_now, capacity: 150, airline_id:middle_east.id)
Airplane.create!(name:'airplane 11', model:'MK8OR', status:'FREE', country:'Armenia',time_on_lane:30.minutes.from_now, capacity: 250, airline_id:middle_east.id)
Airplane.create!(name:'airplane 12', model:'MK3OR', status:'FREE', country:'Armenia',time_on_lane:30.minutes.from_now, capacity: 350, airline_id:middle_east.id)

puts "#{Airplane.count} airplanes created succesfully!"

LaneMaxCount.destroy_all
LaneMaxCount.create!(value:4)

puts "#{LaneMaxCount.count} lane_max_count created succesfully!"

Lane.destroy_all
Lane.create!(capacity:200, lane_max_count_id:LaneMaxCount.first.id)
Lane.create!(capacity:100, lane_max_count_id:LaneMaxCount.first.id)
Lane.create!(capacity:150, lane_max_count_id:LaneMaxCount.first.id)

puts "#{Lane.count} lanes created succesfully!"

Flight.destroy_all
Flight.create!(from:'Yerevan', to:'Paris', flight_start:DateTime.new(2018,11,1), flight_time:1.hour.from_now, lane_id:Lane.first.id,airplane_id:Airplane.first.id)
Flight.create!(from:'Yerevan', to:'Moscow', flight_start:DateTime.new(2018,11,3), flight_time:1.hour.from_now, lane_id:Lane.second.id,airplane_id:Airplane.second.id)
Flight.create!(from:'Yerevan', to:'Paris', flight_start:DateTime.new(2018,12,9), flight_time:1.hour.from_now, lane_id:Lane.third.id,airplane_id:Airplane.third.id)

puts "#{Flight.count} flights created succesfully!"
