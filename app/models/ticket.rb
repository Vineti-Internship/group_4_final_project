class Ticket < ApplicationRecord
    belongs_to :user
    belongs_to :flight
end
