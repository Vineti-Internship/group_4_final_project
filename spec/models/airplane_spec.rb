require 'rails_helper'

RSpec.describe Airplane, :type => :model do
  let(:airline) {Airline.new(name: 'Aeroflot Russian Airlines')} 
  let(:airplane) {Airplane.new(name: "name", model: "model", status: "free", country: "country", time_on_lane: 30.minutes.from_now, airline: airline, capacity: 300)}

  it "is valid with valid attributes" do
    expect(airplane).to be_valid
  end

  it "is not valid without a name" do
    airline.name = nil
    expect(airline).to_not be_valid
  end
  
  it "is not valid without a model" do
    airplane.model = nil
    expect(airplane).to_not be_valid
  end

  it "is not valid without a status" do
    airplane.status = nil
    expect(airplane).to_not be_valid
  end

  it "is not valid without a country" do
    airplane.country = nil
    expect(airplane).to_not be_valid
  end

  it "is not valid without a time_on_lane" do
    airplane.time_on_lane = nil
    expect(airplane).to_not be_valid
  end

  describe "Associations" do
    it { should have_many(:flights) }
    it { should belong_to(:airline) }
  end
  describe "Validations" do 
    it { should validate_presence_of(:model) }
    it { should validate_presence_of(:status) }
    it { should validate_presence_of(:country) }
    it { should validate_presence_of(:time_on_lane) }
  end
end