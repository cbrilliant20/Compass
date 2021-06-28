import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOneTrip } from "../../services/trips"
import "./TripDetails.css"
import ItineraryCreate from "../ItineraryCreate/ItineraryCreate"


const TripDetails = (props) => {
  const [trip, setTrip] = useState(null)
  const {id} = useParams()
  const { itinerariesCreate, tripUpdate, itineraryUpdate, itineraryDelete} = props


  useEffect(() => {
    const fetchTrip = async () => {
      const tripData = await getOneTrip(id)
      setTrip(tripData)
    }
    fetchTrip()
  }, [id])

  
  
  
  return (
    <div>
      <h1>{trip?.name}</h1>
      <div className="trip-details-container">
      <div className="trip-details-card">
          <img src={trip?.img_url} className="trip-details-img" />
          <div className="trip-details-card-content">
          <div className="trip-details-card-text">
          <h4>{trip?.name}</h4>
          <p>{trip?.location}</p>
            <p>{trip?.date_start} - {trip?.date_end}</p>
            </div>

          </div> 
      </div>
      
      
      <div className="itinerary-container">
        <h3>Your Upcoming Itinerary</h3>
      {trip?.itineraries.map((item) => (
        <div className="itinerary-card">
          <p>{item.name}</p>
          <p>{item.location}</p>
          <p>{item.date_start}</p>
          <button onClick={() => itineraryDelete(item.id)}>Remove</button>
        </div>
        

      )
      )}
        <ItineraryCreate />
        </div>
        </div>
      </div>
  )
}

export default TripDetails