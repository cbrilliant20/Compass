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
    <form
    onSubmit={(e) => {
        e.preventDefault();
        tripsCreate(formData);
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
      <input type="text" name="date_start" value={date_start} onChange={handleChange} />
    </label>
    <label>
      End Date:
      <input type="text" name="date_end" value={date_end} onChange={handleChange} />
    </label>
    <label>
      Image URL:
      <input type="text" name="img_url" value={img_url} onChange={handleChange} />
      </label>
      <button>Add Trip</button>
  </form>
  )
}

export default TripCreate