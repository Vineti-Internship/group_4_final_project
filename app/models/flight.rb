class Flight < ApplicationRecord
  belongs_to :lane, inverse_of: :flights
  belongs_to :airplane, inverse_of: :flights
  has_many :tickets
  has_many :users, through: :tickets

  validates :from, :to, :flight_start, :flight_time, :lane, :airplane, presence: true
end
