import "./TripCreate.css"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { postTrip } from "../../services/trips"

const TripCreate = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    date_start: '',
    date_end: '',
    img_url: '',
  })
  // const { tripsCreate } = props
  const { name, location, date_start, date_end, img_url } = formData
  const [trips, setTrips] = useState([])
  const history = useHistory


  const tripsCreate = async (formData) => {
    const tripItem = await postTrip(formData)
    setTrips((prevState) => [...prevState, tripItem])
    // history.push("/trips")
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



  return (
    <form className="trip-create-form"
    onSubmit={(e) => {
        e.preventDefault();
        tripsCreate(formData);
  }}>
      <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" value={location} onChange={handleChange} />
      <input type="text" placeholder="Start Date"name="date_start" value={date_start} onChange={handleChange} />
      <input type="text" name="date_end" placeholder="End Date" value={date_end} onChange={handleChange} />
      <input type="text" name="img_url" placeholder="Image URL" value={img_url} onChange={handleChange} />
    <button>Add Trip</button>
  </form>
  )
}

export default TripCreate