class Airplane < ApplicationRecord
  belongs_to :airline
  has_one :flight
  validates :name, :model, :status, :country, :time_on_lane, presence: true
end
