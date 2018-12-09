class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :role
  has_many :tickets
  has_many :flights, through: :tickets
end
