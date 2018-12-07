User.delete_all
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