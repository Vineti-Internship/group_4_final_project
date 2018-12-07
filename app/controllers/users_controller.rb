class UsersController < ApplicationController
    
    def index
        users = User.all

        render json: users
    end
    
    def show
        user = User.find(params[:id])

        render json: user
    end

    def create
        user = User.new(user_params)

        if user.save
            render json: {status: 'User created successfully'}, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :bad_request
        end
    end

    def update
        user = current_user

        if user.update(user_params)
            render json: user
        else
            render json: user.errors, status: :unprocessable_entity
        end
    end

    def destroy
        user = current_user

        if user.destroy
            head(:ok)
        else
            head(:unprocessable_entity)
        end
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :role, :password, :password_confirmation)
    end
end
