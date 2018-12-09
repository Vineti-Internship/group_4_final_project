class LaneMaxCount < ApplicationRecord
  has_many :lanes
  validates :value,
            presence: true,
            numericality: { only_integer: true }
end
