class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.belongs_to :user, index: true
      t.belongs_to :flight, index: true
      t.timestamps
    end
  end
end
