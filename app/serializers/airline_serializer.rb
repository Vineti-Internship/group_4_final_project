class AirlineSerializer < ActiveModel::Serializer
  # has_many :airplanes

  attributes :id, :name, :airplanes
end
