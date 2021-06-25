import { useState } from "react"

const TripCreate = (props) => {
  const { tripsCreate } = props
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    dateStart: '',
    dateEnd: '',
    imgUrl: '',
  })
  const { name, location, dateStart, dateEnd, imgUrl } = formData


	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};


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
      <button>Add Trip</button>
  </form>
  )
}

export default TripCreate