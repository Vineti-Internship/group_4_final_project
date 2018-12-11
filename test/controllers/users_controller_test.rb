require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users.sample
  end

  test "shouldn't get index" do
    get users_url, as: :json
    assert_response :unauthorized
  end

  test "should create user" do
    assert_difference('User.count') do
      post users_url, params: { user: { email: 'example@mail.com', name: 'example', role:'client', password_confirmation: '123456', password: '123456' } }, as: :json
    end

    assert_response 201
  end

  test "shouldn't show user" do
    get user_url(@user), as: :json
    assert_response :unauthorized
  end

  test "shouldn't update user" do
    patch user_url(@user), params: { user: { email: @user.email, name: @user.name, password_confirmation: @user.password_confirmation, password: @user.password } }, as: :json
    assert_response :unprocessable_entity
  end

  test "shouldn't destroy user" do
    assert_difference('User.count', 0) do
      delete user_url(@user), as: :json
    end

    assert_response :unprocessable_entity
  end
end
