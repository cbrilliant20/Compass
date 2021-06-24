import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOneTrip } from "../../services/trips"
import "./TripDetails.css"

const TripDetails = (props) => {
  const [trip, setTrip] = useState(null)
  const {id} = useParams()
  const {trips, itineraries, itinerariesCreate, tripUpdate, itineraryUpdate, itineraryDelete} = props


  useEffect(() => {
    const fetchTrip = async () => {
      const tripData = await getOneTrip(id)
      setTrip(tripData)
    }
    fetchTrip()
  }, [id])

  useEffect(() => {

  })
  
  
  
  
  
  
  
  
  return (
    <div>
    <h1>{trip}
      
    </h1>
    <h1>{itineraries}</h1>
    </div>
  )
}

export default TripDetails