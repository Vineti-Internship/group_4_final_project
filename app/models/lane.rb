class Lane < ApplicationRecord
  # before_create :check_count
  belongs_to :lane_max_count

  def get_all_available_lanes(time)
    # TODO: find all lanes which are available for that time
  end

end
