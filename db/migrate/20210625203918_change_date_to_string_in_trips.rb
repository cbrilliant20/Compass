class ChangeDateToStringInTrips < ActiveRecord::Migration[6.1]
  def change
    change_column :trips, :date_start, :string
  end
end
