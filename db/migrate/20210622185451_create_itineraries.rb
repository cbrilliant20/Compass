class CreateItineraries < ActiveRecord::Migration[6.1]
  def change
    create_table :itineraries do |t|
      t.string :name
      t.string :location
      t.date :date_start
      t.date :date_end
      t.references :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
