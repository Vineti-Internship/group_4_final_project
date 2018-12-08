class LaneMaxCountsController < ApplicationController
  before_action :set_lane_max_count, only: [:show, :update, :destroy]

  # GET /lane_max_counts
  def index
    @lane_max_counts = LaneMaxCount.all

    render json: @lane_max_counts
  end

  # GET /lane_max_counts/1
  def show
    render json: @lane_max_count
  end

  # POST /lane_max_counts
  def create
    @lane_max_count = LaneMaxCount.new(lane_max_count_params)

    if @lane_max_count.save
      render json: @lane_max_count, status: :created, location: @lane_max_count
    else
      render json: @lane_max_count.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /lane_max_counts/1
  def update
    if @lane_max_count.update(lane_max_count_params)
      render json: @lane_max_count
    else
      render json: @lane_max_count.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lane_max_counts/1
  def destroy
    @lane_max_count.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lane_max_count
      @lane_max_count = LaneMaxCount.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def lane_max_count_params
      params.require(:lane_max_count).permit(:max_count)
    end
end
