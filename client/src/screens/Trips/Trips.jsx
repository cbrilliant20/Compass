import "./Trips.css"
import { Link } from "react-router-dom"
import { useState } from "react"

const Trips = (props) => {
  const { trips, tripDelete, tripsCreate } = props
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    dateStart: '',
    dateEnd: '',
    imgUrl: '',
  })
  const { name, location, dateStart, dateEnd, imgUrl } = formData
  
  const [showFrom, setShowForm] = useState(false)
  let form = 




	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};


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
              <Link to={`/trips/${trip.id}/itinerary`}>
              {/* <Link to={`/itinerary`}>  */}
            <button>Details</button>
            </Link>
          </div>
          </div> 
        </div>
      ))}  
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          tripsCreate(formData)
      }}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={location} onChange={handleChange} />
        </label>
        <label>
          Start Date:
          <input type="date" name="dateStart" value={dateStart} onChange={handleChange} />
        </label>
        <label>
          End Date:
          <input type="date" name="dateEnd" value={dateEnd} onChange={handleChange} />
        </label>
        <label>
          Image URL:
          <input type="text" name="imgUrl" value={imgUrl} onChange={handleChange} />
        </label>

      </form>





      </div>
  )
}

export default Trips