class Ticket < ApplicationRecord
    belongs_to :user
    belongs_to :flight
    validates_uniqueness_of :user_id, :flight_id
end
