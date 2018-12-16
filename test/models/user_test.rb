require 'test_helper'

describe User, type: :model do
  describe 'associations' do
    describe 'has_many' do
      it { is_expected.to has_many(:flights).through(:tickets) }
    end

    describe 'has_many' do
      it { is_expected.to has_many(:tickets) }
    end
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:role) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validates_uniqueness_of(:email) }
    it { is_expected.to validates_format_of(:email).with(/@/) }
    it { is_expected.to validates_presence_of(:password_confirmation).if(:password_digest_changed?) }
    it { is_expected.to validates(:password_confirmation).length(minimum: 6) }
  end
end
