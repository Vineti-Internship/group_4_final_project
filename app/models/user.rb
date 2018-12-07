class User < ApplicationRecord
    has_secure_password
    validates_presence_of :name
    validates_presence_of :role
    validates_presence_of :email
    validates_uniqueness_of :email, case_sensitive: false
    validates_format_of :email, with: /@/
	validates_presence_of :password_confirmation, :if => :password_digest_changed?
    before_save :downcase_email

    def downcase_email
        self.email = self.email.delete(' ').downcase
    end
end
