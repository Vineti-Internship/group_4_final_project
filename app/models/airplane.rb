class Airplane < ApplicationRecord
  belongs_to :airline
  has_many :flights, dependent: :destroy
  validates :name, :model, :status, :country, :time_on_lane, :capacity, presence: true
end
