class AirplanesController < ApplicationController
  before_action :authenticate_request!
  before_action :flight_manager_only, only: [:index, :show] #user can't see airplanes
  #TODO: flight manager can access to :find action
  before_action :lane_manager_only, except: [:index, :show]
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
    # data = params.require(:airplane).permit(:capacity)
    planes = Airplane.all.select {|airplane| airplane.capacity >= params[:capacity] and airplane.flights.length == 0}  
    if planes  
      render json: { available_planes: planes}, status: :ok
    else
      render json: planes.errors, status: :unprocessable_entity
    end
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
    #TODO: remove status and country
    def airplane_params
      params.require(:airplane).permit(:name, :model, :status, :country, :time_on_lane, :airline_id, :capacity)
    end
end
