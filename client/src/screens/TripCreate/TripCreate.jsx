import "./TripCreate.css"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { postTrip } from "../../services/trips"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowClose} from "@fortawesome/free-solid-svg-icons"
import Trips from "../Trips/Trips"


const TripCreate = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    date_start: '',
    date_end: '',
    img_url: '',
  })
  const { name, location, date_start, date_end, img_url } = formData
  const [trips, setTrips] = useState([])
  const history = useHistory
  const {trip} = props
  const [showForm, setShowForm] = useState(false)

  const tripsCreate = async (formData) => {
    const tripItem = await postTrip(formData)
    setTrips((prevState) => [...prevState, tripItem])
    refreshPage()
  }

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

  const refreshPage = () => {
  window.location.reload()
}

// let form
// if (showForm) {
//   form = <Trips />
// }


  return (
    <div className="wrapper">
    <form className="trip-create-form"
    onSubmit={(e) => {
        e.preventDefault();
        tripsCreate(formData);
      }}>
      <h3>Add a Trip:</h3>
      <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" value={location} onChange={handleChange} />
      <input type="text" placeholder="Start Date"name="date_start" value={date_start} onChange={handleChange} />
      <input type="text" name="date_end" placeholder="End Date" value={date_end} onChange={handleChange} />
      <input type="text" name="img_url" placeholder="Image URL" value={img_url} onChange={handleChange} />
        <button>Add Trip</button>
        {/* <FontAwesomeIcon icon={faWindowClose} className="close-button" onClick={() => setShowForm(!showForm)}/> */}
        
      </form>
      {/* {form} */}
      </div>
  )
}

export default TripCreate