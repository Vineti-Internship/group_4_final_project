class AirplaneListSerializer < ActiveModel::Serializer
  belongs_to :airline
  has_many :flights

  attributes :id, :name, :model, :status, :capacity, :time_on_lane, :airline_name

  def airline_name
    object.airline.name
  end
end
