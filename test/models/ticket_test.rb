require 'test_helper'

describe Ticket, type: :model do
  describe 'associations' do
    describe 'belongs_to' do
      it { is_expected.to belongs_to(:flight) }
    end

    describe 'has_many' do
      it { is_expected.to belongs_to(:user) }
    end
  end

  describe 'validations' do
    it { is_expected.to validates(:user_id).uniqueness(scope: :flight_id) }
  end
end

