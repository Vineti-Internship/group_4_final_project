class Lane < ApplicationRecord
  # before_create :check_count
  has_one :lane_max_count

  def get_all_available_lanes(time)
    # TODO: find all lanes which are available for that time
  end

end
