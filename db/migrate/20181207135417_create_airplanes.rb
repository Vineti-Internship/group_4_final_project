class CreateAirplanes < ActiveRecord::Migration[5.2]
  def change
    create_table :airplanes do |t|
      t.string :name
      t.string :model
      t.string :status
      t.string :country
      t.time :time_on_lane
      t.references :airline, foreign_key: true

      t.timestamps
    end
  end
end
