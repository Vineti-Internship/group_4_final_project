require 'test_helper'

class AirlinesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @airline = airlines(:one)
  end

  test "should get index" do
    get airlines_url, as: :json
    assert_response :success
  end

  test "should create airline" do
    assert_difference('Airline.count') do
      post airlines_url, params: { airline: { name: @airline.name } }, as: :json
    end

    assert_response 201
  end

  test "should show airline" do
    get airline_url(@airline), as: :json
    assert_response :success
  end

  test "should update airline" do
    patch airline_url(@airline), params: { airline: { name: @airline.name } }, as: :json
    assert_response 200
  end

  test "should destroy airline" do
    assert_difference('Airline.count', -1) do
      delete airline_url(@airline), as: :json
    end

    assert_response 204
  end
end
