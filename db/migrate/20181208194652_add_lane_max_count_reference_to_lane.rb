class AddLaneMaxCountReferenceToLane < ActiveRecord::Migration[5.2]
  def change
    add_reference :lanes, :lane_max_count, foreign_key: true
  end
end
