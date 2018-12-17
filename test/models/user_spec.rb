require 'rails_helper'

describe User, type: :model do
  describe 'associations' do
    describe 'has_many' do
      it { is_expected.to have_many(:flights).through(:tickets) }
    end

    describe 'has_many' do
      it { is_expected.to have_many(:tickets) }
    end
  end

  describe 'validations' do
    before { allow(subject).to receive(:password_digest_changed?).and_return(true) }
    it { is_expected.to validate_presence_of(:password_confirmation) }
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:role) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_length_of(:password_confirmation).is_at_least(6) }
  end
end
