class RenameMaxCountToVaue < ActiveRecord::Migration[5.2]
  def change
    remove_column :lane_max_counts, :max_count
    add_column :lane_max_counts, :value, :integer
  end
end
