import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import TripCreate from "../screens/TripCreate/TripCreate"
import Trips from "../screens/Trips/Trips"; 
import TripDetails from "../screens/TripDetails/TripDetails"
import { deleteTrip, getAllTrips, postTrip, putTrip } from "../services/trips";
import { deleteItinerary, getAllItineraries, postItinerary, putItinerary } from "../services/itineraries";
  


export const MainContainer = (props) => {
  const [trips, setTrips] = useState([])
  const [itineraries, setItineraries] = useState([])
  const history = useHistory
  const {currentUser} = props

  useEffect(() => {
    const fetchTrips = async () => {
      const tripList = await getAllTrips()
      setTrips(tripList)
      
    }
    if (currentUser) {
      fetchTrips()
    }
  }, [currentUser])

  useEffect(() => {
    const fetchItineraries = async () => {
      const itineraryList = await getAllItineraries()
      setItineraries(itineraryList)
    }
    if (currentUser) {
      fetchItineraries()
    }
  }, [currentUser])

  const tripsCreate = async (formData) => {
    const tripItem = await postTrip(formData)
    setTrips((prevState) => [...prevState, tripItem])
    // history.push("/trips")
  }

  const itinerariesCreate = async (formData) => {
    const itineraryItem = await postItinerary(formData)
    setItineraries((prevState) => [...prevState, itineraryItem])
    // history.push("/trips")
  }

  const tripUpdate = async (id, formData) => {
    const tripItem = await putTrip(id, formData)
    setTrips((prevState) =>
      prevState.map((trip) => {
        return trip.id === Number(id) ? tripItem : trip
      })
    )
    history.push("/trips")
  }

  const itineraryUpdate = async (id, formData) => {
    const itineraryItem = await putItinerary(id, formData)
    setItineraries((prevState) =>
      prevState.map((itinerary) => {
        return itinerary.id === Number(id) ? itineraryItem : itinerary
      })
    )
    history.push("/trips")
  }

  const tripDelete = async (id) => {
    await deleteTrip(id)
    setTrips((prevState) => prevState.filter((trip) => trip.id !== id))
  }

  const itineraryDelete = async (id) => {
    await deleteItinerary(id)
    setItineraries((prevState) => prevState.filter((itinerary) => itinerary.id !== id))
  }

  return (
    <div>
      <Switch>
        <Route exact path="/trips">
          <Trips trips={trips} tripDelete={tripDelete}/>
        </Route>
        <Route exact path="/trips/new">
          <TripCreate tripsCreate={tripsCreate} />
        </Route>
        <Route exact path="/trips/:id/itinerary">
          <TripDetails trips={trips} itineraries={itineraries} itinerariesCreate={itinerariesCreate} tripUpdate={tripUpdate} itineraryUpdate={itineraryUpdate}  itineraryDelete={itineraryDelete}/>
        </Route>
      </Switch>
    </div>
  )
}

export default MainContainer
  

  

