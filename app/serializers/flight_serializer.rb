class FlightSerializer < ActiveModel::Serializer
  belongs_to :lane
  belongs_to :airplane

  attributes :from, :to, :flight_start, :flight_time
end
