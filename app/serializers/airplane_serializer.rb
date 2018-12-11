class AirplaneSerializer < ActiveModel::Serializer
  belongs_to :airline
  has_many :flights

  attributes :id, :name, :model, :status, :capacity, :time_on_lane
end
