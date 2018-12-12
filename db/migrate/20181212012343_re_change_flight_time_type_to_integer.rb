class ReChangeFlightTimeTypeToInteger < ActiveRecord::Migration[5.2]
  def change
    change_column :flights, :flight_time, :integer
  end
end
