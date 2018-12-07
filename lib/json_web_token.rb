require 'jwt'

class JsonWebToken
    def self.encode(payload, role)
        payload.reverse_merge!(meta)
        payload[:aud] = role
        JWT.encode(payload, Rails.application.secret_key_base)
    end

    def self.decode(token)
        JWT.decode(token, Rails.application.secret_key_base)
    end

    def self.valid_payload?(payload)
        !expired?(payload) #|| payload['iss'] != meta[:iss] || payload['aud'] != meta[:aud])
    end

    def self.meta
        {
            exp: 2.hours.from_now.to_i,
            iss: 'issuer_name',
            aud: 'client'
        }
    end

    def self.expired?(payload)
        Time.at(payload['exp']) < Time.now
    end
end