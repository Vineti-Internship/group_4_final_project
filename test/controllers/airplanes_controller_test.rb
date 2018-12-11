require 'test_helper'

class AirplanesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @airplane = airplanes(:one)
  end

  test "should get index" do
    get airplanes_url, as: :json
    assert_response :success
  end

  test "should create airplane" do
    assert_difference('Airplane.count') do
      post airplanes_url, params: { airplane: { airline_id: @airplane.airline_id, model: @airplane.model, name: @airplane.name, status: @airplane.status, time_on_lane: @airplane.time_on_lane } }, as: :json
    end

    assert_response 201
  end

  test "should show airplane" do
    get airplane_url(@airplane), as: :json
    assert_response :success
  end

  test "should update airplane" do
    patch airplane_url(@airplane), params: { airplane: { airline_id: @airplane.airline_id, model: @airplane.model, name: @airplane.name, status: @airplane.status, time_on_lane: @airplane.time_on_lane } }, as: :json
    assert_response 200
  end

  test "should destroy airplane" do
    assert_difference('Airplane.count', -1) do
      delete airplane_url(@airplane), as: :json
    end

    assert_response 204
  end
end
