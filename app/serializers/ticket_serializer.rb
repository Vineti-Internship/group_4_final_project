class TicketSerializer < ActiveModel::Serializer
    attributes :id
    belongs_to :user
    belongs_to :flight
end