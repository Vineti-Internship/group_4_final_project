class CreateFlights < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.string :from
      t.string :to
      t.datetime :flight_start
      t.time :flight_time
      t.references :lane, foreign_key: true
      t.references :airplane, foreign_key: true

      t.timestamps
    end
  end
end
