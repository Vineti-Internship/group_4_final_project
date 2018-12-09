class LaneSerializer < ActiveModel::Serializer
  belongs_to :lane_max_count
  attributes :id, :capacity
end
