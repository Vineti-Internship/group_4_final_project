class Lane < ApplicationRecord
  # , optional: true 
  has_many :flights

  validates :capacity,
            presence: true,
            numericality: { only_integer: true }

  def get_all_available_lanes(time)
    # TODO: find all lanes which are available for that time
  end

end
