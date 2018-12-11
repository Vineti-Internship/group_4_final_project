class RemoveReferenceBetweenLaneAndLaneMaxCount < ActiveRecord::Migration[5.2]
  def change
    remove_column :lanes, :lane_max_count_id
  end
end