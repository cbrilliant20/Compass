class TripsController < ApplicationController
  before_action :set_trip, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:index, :show, :create, :update, :destroy]

  def index
    @trips = Trip.all

    render json: @trips
  end

  def show
    render json: @trip, include: :itineraries
  end

  def create
    @trip = Trip.new(trip_params)
    @trip.user = @current_user

    if @trip.save
      render json: @trip, status: :created
    else
      render json: @trip.errors, status: :unprocessable_entity
    end
  end

  def update
    if @trip.update(trip_params)
      render json: @trip
    else
      render json: @trip.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @trip.destroy
  end

  private
    def set_trip
      @trip = Trip.find(params[:id])
    end

    def trip_params
      params.require(:trip).permit(:name, :location, :date_start, :date_end, :img_url, :user_id)
    end
end
