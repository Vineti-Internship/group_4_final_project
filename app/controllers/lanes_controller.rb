class LanesController < ApplicationController
  before_action :authenticate_request!
  #TODO: user cant see anything about lane
  before_action :lane_or_flight_manager_only, only: [:index]
  #TODO: flight manager cant see all lanes
  before_action :lane_manager_only, except: [:index]
  before_action :set_lane, only: [:show, :update, :destroy]

  # GET /lanes
  def index
    @lanes = Lane.all

    render json: @lanes
  end

  # GET /lanes/1
  def show
    render json: @lane
  end

  # POST /lanes
  def create
    @lane = Lane.new(lane_params)

    if Lane.count < LaneMaxCount.first.value
      if @lane.save
          render json: @lane, status: :created, location: @lane
      else
          render json: @lane.errors, status: :unprocessable_entity
      end
    else
      	render json: {errors: "No more space to create lane"}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /lanes/1
  def update
    if @lane.update(lane_params)
      render json: @lane
    else
      render json: @lane.errors, status: :unprocessable_entity
    end
  end

  #POST /lanes/find
  def find
    # data = params.require(:lane).permit(:capacity, :flight_start)
    available_lanes = []
    Lane.all.each  do |lane|
      add_cup_flights = []
      remove_cup_flights = []
      curr_cap = 0

      lane.flights.each do |flight|
        f_start = params[:flight_start] - flight.airplane.lane_duration
        f_end = params[:flight_start]
        if flight.flight_start < f_end && (flight.flight_start - light.airplane.lane_duration > f_start || flight.flight_start - light.airplane.lane_duration < f_start) 
          remove_cup_flights.push(flight)
          curr_cap -= flight.airplane.capacity
        elsif flight.flight_start > f_end && (flight.flight_start - light.airplane.lane_duration > f_start || flight.flight_start - light.airplane.lane_duration < f_start) 
          add_cup_flights.push(flight)
          curr_cap += flight.airplane.capacity
        end 
        if curr_cap + params[:capacity] < lane.capacity
          available_lanes.push(lane)
        end
      end
    end

    if available_lanes  
      render json: { available_lanes: available_lanes}, status: :ok
    else
      render json: @airplane.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lanes/1
  def destroy
    @lane.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lane
      @lane = Lane.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def lane_params
      params.require(:lane).permit(:capacity)
    end

end
