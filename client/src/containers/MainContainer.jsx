import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Trips from "../screens/Trips/Trips"
import TripDetails

  from "../screens/TripDetails/TripDetails";

import { getAllTrips } from "../services/trips";
  
export const MainContainer = () => {
const [trips, setTrips] = useState([])

  
  useEffect(() => {
    const fetchTrips = async () => {
      const tripList = await getAllTrips()
      setTrips(tripList)
    }
    fetchTrips()
  }, [])



















  
  return
}



  

  

