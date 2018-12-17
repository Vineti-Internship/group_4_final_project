class FlightsController < ApplicationController
  # before_action :flight_manager_only, except: [:index, :show]
  before_action :set_flight, only: [:show, :update, :destroy, :start_flight, :finish_flight]

  # GET /flights
  def index
    render json: Flight.all.order(:flight_start), each_serializer: FlightListSerializer
  end

  # GET /flights/1
  def show
    render json: @flight
  end

  def search_flight
  	begin
      result=[]
      Flight.all.each do  |flight|
        if flight.to == (params[:to]) && flight.from == (params[:from])
          result.push(flight)
        end
      end
        render json: result, status: :ok
    rescue StandardError => e
      render json: {errors: e}, status: :bad_request
    end
  end

  def start_flight
    begin
        @lane_id = @flight.lane_id
        @airplane_id = @flight.airplane_id
        @currentcap = @flight.lane.capacity - @flight.airplane.capacity
        Lane.update(@lane_id, :capacity => @currentcap)
        Airplane.update(@airplane_id, :status => "start")
    rescue StandardError => e
      render json: {errors: e}, status: :bad_request
    end
  end

  def finish_flight
    begin
      @airplane_id = @flight.airplane_id
      Airplane.update(@airplane_id, :status =>"free")
     @flight.update(  :is_ended => true)
    rescue StandardError => e
      render json: {errors: e}, status: :bad_request
    end
  end

  # POST /flights
  def create
    begin
      @flight = Flight.new(flight_params)
      if @flight.save
        render json: @flight, status: :created, location: @flight
      end
    rescue StandardError => e
      render json: {errors: e}, status: :bad_request
    end
  end

  # PATCH/PUT /flights/1
  def update
    begin
      set_flight
      if @flight.update(flight_params)
        render json: @flight
      end
    rescue StandardError => e
      render json: {errors: e}, status: :bad_request
    end
  end

  # DELETE /flights/1
  def destroy
    begin
      if @flight.destroy
        render json: {}, status: :ok
      end
    rescue StandardError => e
      render json: {errors: e}, status: :bad_request
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flight
      @flight = Flight.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def flight_params
      params.require(:flight).permit(:from, :to, :flight_start, :flight_time, :lane_id, :airplane_id)
    end
end