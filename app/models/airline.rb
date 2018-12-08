class Airline < ApplicationRecord
  has_many :airplanes, dependent: :destroy
end
