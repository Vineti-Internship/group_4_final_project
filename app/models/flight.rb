class Flight < ApplicationRecord
  belongs_to :lane, inverse_of: :flights
  belongs_to :airplane, inverse_of: :flights
  has_many :tickets
  has_many :users, through: :tickets

  validates :from, :to, :flight_start, :flight_time, :lane, :airplane, presence: true

  enum flight_status: FLIGHT_STATUS = {
    created: "Pending",
    ready_to_start: "Ready",
    on_line: "On Flight",
    ready_to_finish: "Landing",
    ended: "Ended"
  }

end
