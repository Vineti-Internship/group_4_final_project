class AirplanesController < ApplicationController
  #before_action :authenticate_request!
  #before_action :flight_manager_only, only: [:find] #user can't see airplanes
  before_action :lane_manager_only, except: [:index, :show, :find]
  before_action :set_airplane, only: [:show, :update, :destroy]

  # GET /airplanes
  def index
    @airplanes = Airplane.all

    render json: @airplanes
  end

  # GET /airplanes/1
  def show
    render json: @airplane
  end

  # POST /airplanes
  def create
    @airplane = Airplane.new(airplane_params)

    if @airplane.save
      render json: @airplane, status: :created, location: @airplane
    else
      render json: @airplane.errors, status: :unprocessable_entity
    end
  end

  #POST /airplanes/find
  def find
    available_planes = []
    Airplane.all.each do |plane|
      f_start = params[:flight_start].to_datetime - (plane.time_on_lane/60).minutes
      f_end = params[:flight_start].to_datetime + params[:flight_time].to_i.minutes
      plane.flights.each do |flight|
        if flight.flight_start + flight.flight_time < f_start || flight.flight_start + flight.flight_time > f_end
          if params[:capacity] <= plane.capacity
            available_planes.push(plane)
          end
        end
      end
    end
    render json: available_planes, status: :ok
  end

  # PATCH/PUT /airplanes/1
  def update
    if @airplane.update(airplane_params)
      render json: @airplane
    else
      render json: @airplane.errors, status: :unprocessable_entity
    end
  end

  # DELETE /airplanes/1
  def destroy
    @airplane.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_airplane
      @airplane = Airplane.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def airplane_params
      params.require(:airplane).permit(:name, :model, :status,:time_on_lane, :airline_id, :capacity)
    end
end
