class AirplaneSerializer < ActiveModel::Serializer
  # has_one :airline

  attributes :id, :name, :model, :status, :country, :time_on_lane
end
