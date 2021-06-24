import "./Trips.css"
import { Link } from "react-router-dom"

const Trips = (props) => {
  const { trips, tripDelete, tripsCreate } = props
  console.log(trips)

  return(
    <div>
      {trips.map((trip) => (
        <div className="trip-card">
          <h4>{trip.name}</h4>
          <p>{trip.location}</p>
          <p>{trip.date_start} - {trip.date_end}</p>
          <Link to={`/trips/${trip.id}/itinerary`}>
            <button>Details</button>
            </Link>
        </div>
      ))}  
    </div>
  )
}

export default Trips