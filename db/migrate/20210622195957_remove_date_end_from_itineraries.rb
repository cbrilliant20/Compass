class RemoveDateEndFromItineraries < ActiveRecord::Migration[6.1]
  def change
    remove_column :itineraries, :date_end, :date
  end
end
