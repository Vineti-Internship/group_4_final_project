require 'rails_helper'

RSpec.describe Lane, :type => :model do

  let(:lane_max_count) {LaneMaxCount.new(value: 4)} 
  let(:lane) { Lane.new(capacity: 400, lane_max_count: lane_max_count) }


  it "is valid with valid attributes" do
    expect(lane).to be_valid
  end

  it "is not valid without a capacity" do
    lane.capacity = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a lane_max_count_id" do
    lane.lane_max_count = nil
    expect(lane).to_not be_valid
  end

  describe "Associations" do
    it { should have_many(:flights) }
    it { should belong_to(:lane_max_count) }
  end

#extra
  describe "Validations" do 
    it { should validate_presence_of(:capacity) }
    it { should validate_numericality_of(:capacity) }
  end
  
end