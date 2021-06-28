class Trip < ApplicationRecord
  belongs_to :user
  has_many :itineraries, dependent: :destroy
end
