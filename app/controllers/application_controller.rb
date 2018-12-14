require 'rubygems'
require 'crypt/blowfish'
require 'base64'

class ApplicationController < ActionController::API
    require 'json_web_token'

    protected
    attr_reader :current_user

    def flight_duration
        30.minutes
    end

    def authenticate_request!
        if !payload || !JsonWebToken.valid_payload?(payload.first)
            return invalid_authentication
        end

        load_current_user!
        invalid_authentication unless @current_user
    end

    def invalid_authentication
        render json: {error: "Invalid Request"}, status: :unauthorized
    end

    def admin_only
        invalid_authentication unless payload[0]['aud'] == 'admin'
    end

    def flight_manager_only
        invalid_authentication unless (payload[0]['aud'] == 'f_manager' || payload[0]['aud'] == 'admin')
    end
 
    def lane_manager_only
        invalid_authentication unless (payload[0]['aud'] == 'l_manager' || payload[0]['aud'] == 'admin')
    end
 
    def lane_or_flight_manager_only
        invalid_authentication unless (payload[0]['aud'] == 'l_manager' || payload[0]['aud'] == 'f_manager' || payload[0]['aud'] == 'admin')
    end

    private

    def payload
        auth_header = request.headers['Authorization']
        token = auth_header.split(' ').last
        JsonWebToken.decode(token)
    rescue
        nil
    end

    def load_current_user!
        @current_user = User.find_by(id: payload[0]['user_id'])
    end
end
