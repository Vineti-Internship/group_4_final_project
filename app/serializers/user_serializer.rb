class UserSerializer < ActiveModel::Serializer
  attributes :name, :email, :role
end
