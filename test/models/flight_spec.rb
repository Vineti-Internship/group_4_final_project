require 'rails_helper'

describe Flight, type: :model do
  describe 'associations' do
    describe 'belongs_to' do
      it { is_expected.to belong_to(:lane).inverse_of(:flights) }
    end

    describe 'belongs_to' do
      it { is_expected.to belong_to(:airplane).inverse_of(:flights) }
    end
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:from) }
    it { is_expected.to validate_presence_of(:to) }
    it { is_expected.to validate_presence_of(:flight_start) }
    it { is_expected.to validate_presence_of(:flight_time) }
  end
end
