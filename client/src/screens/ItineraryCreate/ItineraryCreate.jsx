import "./ItineraryCreate.css"

import { useState } from "react"
import { useHistory } from "react-router-dom"
import { postItinerary } from "../../services/itineraries"

const ItineraryCreate = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    date_start: '',

  })
  const { name, location, date_start } = formData
  const [itineraries, setItineraries] = useState([])
  const history = useHistory


  const itineraryCreate = async (formData) => {
    const itineraryItem = await postItinerary(formData)
    setItineraries((prevState) => [...prevState, itineraryItem])
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
    <form className="itinerary-form"
    onSubmit={(e) => {
        e.preventDefault();
        itineraryCreate(formData);
  }}>
      <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" value={location} onChange={handleChange} />
      <input type="text" name="date_start" placeholder="Start Date" value={date_start} onChange={handleChange} />
      <button>Save</button>
  </form>
  )
}

export default ItineraryCreate