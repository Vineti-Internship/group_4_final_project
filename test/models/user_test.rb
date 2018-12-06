require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test 'valid user' do
	user = User.new(name:'Karapet', 
					email:'Karapet@mail.com', 
					role:'client', 
					password:'123456', 
					password_confirmation:'123456')
    assert user.valid?
  end

  test 'invalid without name' do
	user = User.new(email:'Karapet@mail.com', 
					role:'client', 
					password:'123456', 
					password_confirmation:'123456')

	refute user.valid?, 'user is valid without a name'
	assert_not_nil user.errors[:name], 'no validation error for name present'
  end

  test 'invalid without role' do
	user = User.new(name:'Karapet',
					email:'Karapet@mail.com', 
					password:'123456', 
					password_confirmation:'123456')
		
	refute user.valid?, 'user is valid without a role'
	assert_not_nil user.errors[:role], 'no validation error for role present'
  end

  test 'invalid without email' do
	user = User.new(name:'Karapet',
					role:'client', 
					password:'123456', 
					password_confirmation:'123456')

	refute user.valid?, 'user is valid without a email'
	assert_not_nil user.errors[:email], 'no validation error for email present'
  end

  test 'invalid with invalid email' do
	user = User.new(name:'Karapet',
					email:'karapet',
					role:'client', 
					password:'123456', 
					password_confirmation:'123456')

	refute user.valid?, 'user is valid with invalid email'
	assert_not_nil user.errors[:email], 'no validation error for email context present'
  end

  test 'invalid without password' do
	user = User.new(name:'Karapet', 
					email:'Karapet@mail.com', 
					role:'client', 
					password_confirmation:'123456')

	refute user.valid?, 'user is valid without a password'
	assert_not_nil user.errors[:password], 'no validation error for password present'
  end

  test 'invalid without password_confirmation' do
	user = User.new(name:'Karapet', 
					email:'Karapet@mail.com', 
					role:'client', 
					password:'123456')

	refute user.valid?, 'user is valid without a password_confirmation'
	assert_not_nil user.errors[:password_confirmation], 'no validation error for password_confirmation present'
  end
end
