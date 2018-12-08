class Flight < ApplicationRecord
  belongs_to :lane, inverse_of: :flights
  belongs_to :airplane, inverse_of: :flights

  validates :from, :to, :flight_start, :flight_time, :lane, :airplane, presence: true
end
