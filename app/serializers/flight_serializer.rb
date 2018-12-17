class FlightSerializer < ActiveModel::Serializer
  belongs_to :lane
  belongs_to :airplane
  has_many :tickets

  attributes :id, :from, :to, :flight_start, :flight_end, :flight_time, :is_ended

  def flight_end
    object.flight_start + (object.flight_time).minutes
  end
end
