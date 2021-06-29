import "./ItineraryCreate.css"
import { useState } from "react"

const ItineraryCreate = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    date_start: '',
  })

  const { name, location, date_start } = formData
  const [itineraries, setItineraries] = useState([])
  const {itinerariesCreate, id} = props

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
    }));
	};

  return (
    <form className="itinerary-form"
    onSubmit={(e) => {
        e.preventDefault();
        itinerariesCreate(id, formData);
  }}>
      <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" value={location} onChange={handleChange} />
      <input type="text" name="date_start" placeholder="Start Date" value={date_start} onChange={handleChange} />
      <button type="submit">Save</button>
  </form>
  )
}

export default ItineraryCreate