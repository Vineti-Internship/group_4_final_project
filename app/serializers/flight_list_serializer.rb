class FlightListSerializer < ActiveModel::Serializer
  attributes :id, :from, :to, :flight_start, :flight_time, :airline_name
  belongs_to :airplane
  belongs_to :lane
  
  def airline_name
    object.airplane.airline.name
  end
end