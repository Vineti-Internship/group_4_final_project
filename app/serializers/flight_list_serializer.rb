class FlightListSerializer < ActiveModel::Serializer
  attributes :from, :to, :flight_start, :flight_time, :airplane_name
  
  def airplane_name
    object.airplane.name
  end
end