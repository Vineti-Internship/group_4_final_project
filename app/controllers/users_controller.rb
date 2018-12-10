class UsersController < ApplicationController
    before_action :authenticate_request!, except: [:login, :create, :update, :destroy]
    before_action :admin_only, except: [:login, :profile, :create, :destroy, :update]

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

    def profile
        user = current_user
        
        render json: user
    end

    def update_role
        user = current_user
        user_role = params.require(:user).permit(:role)
        
        if user.update(user_role)
            render json: user
        else
            render json: user.errors, status: :unprocessable_entity
        end
    end

    def update
        user = current_user
        user_paras_wo_role = params.require(:user).permit(:name, :email, :password, :password_confirmation) 

        if user.update(user_paras_wo_role)
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

    def login
        user = User.find_by(email: params[:email].to_s.downcase)

        if user&.authenticate(params[:password])
            auth_token = JsonWebToken.encode({user_id: user.id}, user.role)
            render json: {auth_token: auth_token}, status: :ok
        else
            render json: {error: 'Invalid username / password'}, status: :unauthorized
        end
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :role, :password, :password_confirmation)
    end
end
