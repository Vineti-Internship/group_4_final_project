require 'rails_helper'

RSpec.describe Lane, :type => :model do
  describe "Associations" do
    it { should have_many(:flights) }
    it { should belong_to(:lane_max_count) }
  end
  describe "Validations" do 
    it { should validate_presence_of(:capacity) }
    it { should validate_numericality_of(:capacity) }
  end
end