class LanesController < ApplicationController
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
      logger.info("count #{Lane.count}")
      @lane = Lane.new(lane_params)
      if @lane.save
        render json: @lane, status: :created, location: @lane
      else
        render json: @lane.errors, status: :unprocessable_entity
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

  # DELETE /lanes/1
  def destroy
    @lane.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lane
      @lane = Lane.find(params[:id])
    end

    # def check_if
    #   errors[:base] << "Add your validation message here"
    #   return false if Lane.count > 4
    # end

    # Only allow a trusted parameter "white list" through.
    def lane_params
      params.require(:lane).permit(:capacity)
    end

end
