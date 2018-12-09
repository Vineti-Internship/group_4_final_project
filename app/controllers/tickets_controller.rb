class TicketsController < ApplicationController
    before_action :set_ticket, only: [:show, :destroy]
    before_action :authenticate_request!
    before_action :flight_manager_only, only: [:index, :show]

    def index
        tickets = Ticket.all
        render json: tickets
    end

    def show
        render json: @ticket
    end

    def create
        ticket = Ticket.new (ticket_params)
        ticket.user_id = current_user.id
        if ticket.save
            render json: {status: 'ticket created successfully'}, status: :created
        else
            render json: {errors: ticket.errors.full_messages}, status: :bad_request
        end
    end

    def destroy
        if @ticket.destroy
            head(:ok)
        else
            head(:unprocessable_entity)
        end
    end

    private
    def set_ticket
        @ticket = Ticket.find(params[:id])
    end

    def ticket_params
        params.require(:ticket).permit(:flight_id)
    end
end
