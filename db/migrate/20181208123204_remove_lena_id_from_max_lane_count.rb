class RemoveLenaIdFromMaxLaneCount < ActiveRecord::Migration[5.2]
  def change
    remove_column :lane_max_counts, :lane_id
  end
end
