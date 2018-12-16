require 'rails_helper'

RSpec.describe LaneMaxCount, :type => :model do
  describe "Associations" do
    it { should have_many(:lanes) }
  end
  describe "Validations" do 
    it { should validate_presence_of(:value) }
    it { should validate_numericality_of(:value) }
  end
end