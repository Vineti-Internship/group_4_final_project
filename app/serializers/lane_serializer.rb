class LaneSerializer < ActiveModel::Serializer
  # has_one :lane_max_count

  attributes :id, :capacity
end
