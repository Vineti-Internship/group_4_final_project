require 'test_helper'

class LanesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lane = lanes(:one)
  end

  test "should get index" do
    get lanes_url, as: :json
    assert_response :success
  end

  test "should create lane" do
    assert_difference('Lane.count') do
      post lanes_url, params: { lane: { capacity: @lane.capacity } }, as: :json
    end

    assert_response 201
  end

  test "should show lane" do
    get lane_url(@lane), as: :json
    assert_response :success
  end

  test "should update lane" do
    patch lane_url(@lane), params: { lane: { capacity: @lane.capacity } }, as: :json
    assert_response 200
  end

  test "should destroy lane" do
    assert_difference('Lane.count', -1) do
      delete lane_url(@lane), as: :json
    end

    assert_response 204
  end
end
