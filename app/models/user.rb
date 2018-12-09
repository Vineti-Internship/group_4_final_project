class User < ApplicationRecord
    has_secure_password
    validates_presence_of :name
    validates_presence_of :role
    validates_presence_of :email
    before_save :downcase_email
    validates_uniqueness_of :email, case_sensitive: false
    validates_format_of :email, with: /@/
    validates_presence_of :password_confirmation, :if => :password_digest_changed?
    validates :password_confirmation, length: {minimum: 6}
    has_many :ticket
    has_many :flight, through: :ticket

    def downcase_email
        self.email = self.email.delete(' ').downcase
    end
end
