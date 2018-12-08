class AirlinesController < ApplicationController
  before_action :set_airline, only: [:show, :update, :destroy]

  # GET /airlines
  def index
    @airlines = Airline.all

    render json: @airlines
  end

  # GET /airlines/1
  def show
    render json: @airline
  end

  # POST /airlines
  def create
    @airline = Airline.new(airline_params)

    if @airline.save
      render json: @airline, status: :created, location: @airline
    else
      render json: @airline.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /airlines/1
  def update
    if @airline.update(airline_params)
      render json: @airline
    else
      render json: @airline.errors, status: :unprocessable_entity
    end
  end

  # DELETE /airlines/1
  def destroy
    @airline.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_airline
      @airline = Airline.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def airline_params
      params.require(:airline).permit(:name)
    end
end
