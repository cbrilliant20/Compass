class ChangeDateEndToStringInTrips < ActiveRecord::Migration[6.1]
  def change
    change_column :trips, :date_end, :string
  end
end
