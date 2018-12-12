class FlightSerializer < ActiveModel::Serializer
  belongs_to :lane
  belongs_to :airplane

  attributes :id, :from, :to, :flight_start, :flight_end, :flight_time

  def flight_end
    object.flight_start + (object.flight_time).minutes
  end
end
