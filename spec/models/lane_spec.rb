require 'rails_helper'

RSpec.describe Lane, :type => :model do

  let(:lane_max_count) {LaneMaxCount.new(value: 4)} 
  
  # subject { described_class.new(capacity: 400, lane_max_count: lane_max_count) }
  let(:lane) { Lane.new(capacity: 400, lane_max_count: lane_max_count) }


  it "is valid with valid attributes" do
    # subject.capacity = 400
    # subject.lane_max_count_id = LaneMaxCount.first.id
    expect(lane).to be_valid
  end

  # it "is not valid without a capacity" do
  #   subject.capacity = nil
  #   expect(subject).to_not be_valid
  # end

  # it "is not valid without a lane_max_count_id" do
  #   subject.lane_max_count = nil
  #   expect(subject).to_not be_valid
  # end

  # it "is not valid if capacity is not integer" do 
  #   subject.capacity = "people"
  #   expect(subject).to_not be_valid
  # end

  describe "Associations" do
    # it "has many flights" do
    #   assc = described_class.reflect_on_association(:flights)
    #   expect(assc.macro).to eq :has_many

    it { should have_many(:flights) }
    it { should belong_to(:lane_max_count) }
  end

  describe "Validations" do 
    it { should validate_presence_of(:capacity) }
    it { should validate_numericality_of(:capacity) }
  end
  
end