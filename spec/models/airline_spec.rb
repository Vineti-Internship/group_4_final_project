require 'rails_helper'

RSpec.describe Airline, :type => :model do

  describe "Associations" do
    it { should have_many(:airplanes) }
  end

  describe "Validations" do 
    it { should validate_presence_of(:name) }
  end
  
end