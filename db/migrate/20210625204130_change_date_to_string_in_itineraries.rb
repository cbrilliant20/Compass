class ChangeDateToStringInItineraries < ActiveRecord::Migration[6.1]
  def change
    change_column :itineraries, :date_start, :string
  end
end
