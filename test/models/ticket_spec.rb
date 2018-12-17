require 'rails_helper'

describe Ticket, type: :model do
  describe 'associations' do
    describe 'belongs_to' do
      it { is_expected.to belong_to(:flight) }
    end

    describe 'has_many' do
      it { is_expected.to belong_to(:user) }
    end
  end

  describe 'validations' do
    it { is_expected.to validate_uniqueness_of(:user_id).scoped_to(:flight_id) }
  end
end

