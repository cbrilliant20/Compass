import "./Trips.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle} from "@fortawesome/free-solid-svg-icons"
import TripCreate from "../TripCreate/TripCreate"





const Trips = (props) => {
  const [showForm, setShowForm] = useState(false)

  let form
  if (showForm) {
    form = <TripCreate />
  }





  const { trips, tripDelete } = props
  console.log(trips)
  return(
    <div className="trips-container">
      <div className="trips-header">
      <h2>Your Trips</h2>
      <FontAwesomeIcon className="add-icon" icon={faPlusCircle} onClick={() => setShowForm(!showForm)}/>
      <div className="trips">
        {form}
        </div>
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
              <Link to={`/trips/${trip.id}/itinerary`}>
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