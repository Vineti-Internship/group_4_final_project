class AddIsEndedColumnToFlight < ActiveRecord::Migration[5.2]
  def change
    add_column :flights, :is_ended, :boolean
  end
end
