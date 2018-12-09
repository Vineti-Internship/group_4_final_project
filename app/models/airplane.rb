class Airplane < ApplicationRecord
  belongs_to :airline
  has_one :flight, dependent: :destroy
  validates :name, :model, :status, :country, :time_on_lane, presence: true
end
