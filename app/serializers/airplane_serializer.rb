class AirplaneSerializer < ActiveModel::Serializer
  has_many :airline

  attributes :id, :name, :model, :status, :country, :time_on_lane
end
