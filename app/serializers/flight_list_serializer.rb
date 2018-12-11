class FlightListSerializer < ActiveModel::Serializer
  attributes :id, :from, :to, :flight_start, :flight_end, :airline_name
  belongs_to :airplane
  belongs_to :lane

  def flight_end 
    object.flight_start+30.minutes
  end
  
  def airline_name
    object.airplane.airline.name
  end
end