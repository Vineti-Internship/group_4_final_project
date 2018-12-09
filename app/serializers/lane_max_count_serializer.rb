class LaneMaxCountSerializer < ActiveModel::Serializer
  has_many :lanes
  attributes :id, :value
end
