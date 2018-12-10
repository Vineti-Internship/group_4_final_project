require 'test_helper'

class TicketsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ticket = tickets(:one)
  end

  test "shouldn't get index" do
    get tickets_url, as: :json
    assert_response :unauthorized
  end

  test "shouldn't create a ticket" do
    assert_difference('Ticket.count', 0) do
      post tickets_url, params: { ticket: { flight_id: Flight.first.id} }, as: :json
    end

    assert_response 401
  end

  test "shouldn't show a ticket" do
    get ticket_url(@ticket), as: :json
    assert_response :unauthorized
  end

  test "shouldn't destroy ticket" do
    assert_difference('Ticket.count', 0) do
      delete ticket_url(@ticket), as: :json
    end

    assert_response 401
  end
end
