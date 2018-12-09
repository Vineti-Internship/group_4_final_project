require 'test_helper'

class TicketTest < ActiveSupport::TestCase
  test 'valid ticket' do
    ticket = Ticket.new(user_id:User.first.id, flight_id:Flight.first.id)
    assert ticket.valid?
  end

  test 'invalid without user' do
    ticket = Ticket.new(flight_id:Flight.first.id)
    refute ticket.valid?, 'ticket is valid without user'
    assert_not_nil ticket.errors[:user_id], 'no validation error for user_id'
  end

  test 'invalid without flight' do
    ticket = Ticket.new(user_id:User.first.id)
    refute ticket.valid?, 'ticket is valid without flight'
    assert_not_nil ticket.errors[:flight_id], 'no validation error for flight_id'
  end

end
