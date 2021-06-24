import "./Trips.css"
import { Link } from "react-router-dom"

const Trips = (props) => {
  const { trips, tripDelete, tripsCreate } = props
  console.log(trips)

  return(
    <div className="trips-container">
      <h2>Your Trips</h2>
    <div className="trips">
      
      {trips.map((trip) => (
        <div className="trip-card">
          <img src={trip.img_url} className="trip-img" />
          <div className="trip-card-content">
          <div className="trip-card-text">
          <h4>{trip.name}</h4>
          <p>{trip.location}</p>
            <p>{trip.date_start} - {trip.date_end}</p>
            </div>
          <div className="details-button">
              {/* <Link to={`/trips/${trip.id}/itinerary`}> */}
              <Link to={`/itinerary`}> 
            <button>Details</button>
            </Link>
          </div>
          </div> 
        </div>
      ))}  
      </div>
      </div>
  )
}

export default Trips