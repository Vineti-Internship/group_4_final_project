class LaneMaxCountsController < ApplicationController
  before_action :authenticate_request!
  before_action :admin_only, only: [:update]
  before_action :lane_manager_only, except: [:update]
  
  before_action :set_lane_max_count, only: [:update]


  # GET /lane_max_counts
  def index
    @lane_max_counts = LaneMaxCount.all

    render json: @lane_max_counts
  end

  # PATCH/PUT /lane_max_counts/1
  def update
    if @lane_max_count.update(lane_max_count_params)
      render json: @lane_max_count
    else
      render json: @lane_max_count.errors, status: :unprocessable_entity
    end
  end

  private
  #   # Use callbacks to share common setup or constraints between actions.
    def set_lane_max_count
      @lane_max_count = LaneMaxCount.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def lane_max_count_params
      params.require(:lane_max_count).permit(:value)
    end
end
