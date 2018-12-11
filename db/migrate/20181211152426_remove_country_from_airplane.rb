class RemoveCountryFromAirplane < ActiveRecord::Migration[5.2]
  def change
    remove_column :airplanes, :country, :string
  end
end
