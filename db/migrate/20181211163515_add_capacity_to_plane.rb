class AddCapacityToPlane < ActiveRecord::Migration[5.2]
  def change
    add_column :airplanes, :capacity, :integer
  end
end
