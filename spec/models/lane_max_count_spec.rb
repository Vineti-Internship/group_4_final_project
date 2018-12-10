require 'rails_helper'

RSpec.describe LaneMaxCount, :type => :model do
  let(:lane_max_count) {LaneMaxCount.new(value: 4)} 
  
  it "is valid with valid attributes" do
    expect(lane_max_count).to be_valid
  end

  it "is not valid without a value" do
    lane_max_count.value = nil
    expect(lane_max_count).to_not be_valid
  end

  it "is not valid if value is not integer" do
    lane_max_count.value = 11.4
    expect(lane_max_count).to_not be_valid
  end

  describe "Associations" do
    it { should have_many(:lanes) }
  end

#extra
  describe "Validations" do 
    it { should validate_presence_of(:value) }
    it { should validate_numericality_of(:value) }
  end
  
end