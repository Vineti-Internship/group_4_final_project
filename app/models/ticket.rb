class Ticket < ApplicationRecord
    belongs_to :user
    belongs_to :flight
    validates :user_id, uniqueness: { scope: :flight_id}
end
