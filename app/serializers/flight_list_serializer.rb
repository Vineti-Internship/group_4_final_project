class FlightListSerializer < ActiveModel::Serializer
  belongs_to :airplane
  belongs_to :lane
  has_many :tickets
  attributes :id, :from, :to, :flight_start, :flight_end, :airline_name, :status

  def flight_end 
    object.flight_start + (object.flight_time).minutes
  end

  def airline_name
    object.airplane.airline.name
  end

  def status
    @start = object.flight_start
    @end = flight_end
    @now = DateTime.now
    @flight_status = Flight::FLIGHT_STATUS[:created]

    if @start < @now
      @flight_status = Flight::FLIGHT_STATUS[:created]
    elsif @start > @now && @now < @end && object.airplane.status != "start"
      @flight_status = Flight::FLIGHT_STATUS[:ready_to_start]
    elsif @start > @now && @now  < @end && object.airplane.status == "start"
      @flight_status = Flight::FLIGHT_STATUS[:on_line]
    elsif @now > @end && object.airplane.status != "free"
      @flight_status = Flight::FLIGHT_STATUS[:ready_to_finish]
    else
      @flight_status = Flight::FLIGHT_STATUS[:ended]
    end

    @flight_status
  end
end