require 'test_helper'

class LaneMaxCountsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lane_max_count = lane_max_counts(:one)
  end

  test "should get index" do
    get lane_max_counts_url, as: :json
    assert_response :success
  end

  test "should create lane_max_count" do
    assert_difference('LaneMaxCount.count') do
      post lane_max_counts_url, params: { lane_max_count: { max_count: @lane_max_count.max_count } }, as: :json
    end

    assert_response 201
  end

  test "should show lane_max_count" do
    get lane_max_count_url(@lane_max_count), as: :json
    assert_response :success
  end

  test "should update lane_max_count" do
    patch lane_max_count_url(@lane_max_count), params: { lane_max_count: { max_count: @lane_max_count.max_count } }, as: :json
    assert_response 200
  end

  test "should destroy lane_max_count" do
    assert_difference('LaneMaxCount.count', -1) do
      delete lane_max_count_url(@lane_max_count), as: :json
    end

    assert_response 204
  end
end
