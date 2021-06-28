import "./TripEdit.css"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowClose} from "@fortawesome/free-solid-svg-icons"

const TripEdit = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    date_start: '',
    date_end: '',
    img_url: '',
  })

  const { name, location, date_start, date_end, img_url } = formData
  const { trips, tripUpdate } = props
  const { id } = useParams()
  
	useEffect(() => {
		const prefillFormData = () => {
      const singleTrip = trips.find((trip) => trip.id === Number(id));
			setFormData({
        name: singleTrip.name,
        location: singleTrip.location,
        date_start: singleTrip.date_start,
        date_end: singleTrip.date_end,
        img_url: singleTrip.img_url,
			});
    };
		if (trips?.length) {
			prefillFormData();
		}
  }, [trips]);
  
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
    <div className="wrapper">
    <form className="trip-edit-form"
    onSubmit={(e) => {
        e.preventDefault();
        tripUpdate(id, formData);
      }}>
      <h3>Update Trip:</h3>
      <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" value={location} onChange={handleChange} />
      <input type="text" name="date_start" placeholder="Start Date" value={date_start} onChange={handleChange} />
      <input type="text" name="date_end" placeholder="End Date" value={date_end} onChange={handleChange} />
      <input type="text" name="img_url" placeholder="Image URL" value={img_url} onChange={handleChange} />
      <div className="trip-edit-form-buttons">
        <button>Save</button>
        <FontAwesomeIcon icon={faWindowClose} className="close-button" onClick={refreshPage} />
</div>
      </form>
      </div>
  )
}

export default TripEdit