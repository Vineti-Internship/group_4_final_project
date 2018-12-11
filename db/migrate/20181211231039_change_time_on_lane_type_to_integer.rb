class ChangeTimeOnLaneTypeToInteger < ActiveRecord::Migration[5.2]
  def change
    remove_column :airplanes, :time_on_lane
    add_column :airplanes, :time_on_lane, :integer
  end
end
