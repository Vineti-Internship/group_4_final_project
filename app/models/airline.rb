class Airline < ApplicationRecord
  has_many :airplanes, dependent: :destroy
  validates :name, presence: true
end
