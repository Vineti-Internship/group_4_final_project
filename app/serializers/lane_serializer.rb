class LaneSerializer < ActiveModel::Serializer
  attributes :id, :capacity
  has_many :flights
end
