require 'rails_helper'

RSpec.describe Airplane, :type => :model do
  describe "Associations" do
    it { should have_many(:flights) }
    it { should belong_to(:airline) }
  end
  describe "Validations" do 
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:model) }
    it { should validate_presence_of(:status) }
    it { should validate_presence_of(:time_on_lane) }
    it { should validate_presence_of(:capacity) }    
  end
end