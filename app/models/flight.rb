class Flight < ApplicationRecord
  belongs_to :lane, inverse_of: :flights
  belongs_to :airplane, inverse_of: :flights
  has_many :tickets
  has_many :users, through: :tickets

  validates :from, :to, :flight_start, :flight_time, :lane, :airplane, presence: true

  enum flight_status: FLIGHT_STATUS = {
    created: 0,
    ready_to_start: 1,
    on_line: 2,
    ready_to_finish: 3,
    ended: 4
  }

end
