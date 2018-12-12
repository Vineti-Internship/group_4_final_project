class FlightListSerializer < ActiveModel::Serializer
  belongs_to :airplane
  belongs_to :lane

  attributes :id, :from, :to, :flight_start, :flight_end, :airline_name

  def flight_end 
    object.flight_start + (object.flight_time.hour).hours + (object.flight_time.min).minutes
  end

  def airline_name
    object.airplane.airline.name
  end
end