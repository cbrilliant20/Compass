import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
	loginUser,
	registerUser,
	verifyUser,
	removeToken,
} from './services/auth';
import Layout from './components/Layout/Layout';
import Landing from './screens/Landing/Landing';
import Trips from "./screens/Trips/Trips"
import TripDetails from "./screens/TripDetails/TripDetails"
import Resources from './screens/Resources/Resources';
import Login from './screens/Login/Login';
import { deleteFood, getAllTrips, postFood, putFood } from './services/trips';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();


useEffect(() => {
const handleVerify = async () => {
  const userData = await verifyUser();
  setCurrentUser(userData);
};
handleVerify();
}, []);

const handleLogin = async (formData) => {
const userData = await loginUser(formData);
setCurrentUser(userData);
history.push('/trips');
};

const handleRegister = async (formData) => {
const userData = await registerUser(formData);
setCurrentUser(userData);
history.push('/trips');
};

const handleLogout = () => {
setCurrentUser(null);
localStorage.removeItem('authToken');
removeToken();
};
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Layout currentUser={currentUser} handleLogout={handleLogout}>
          <Switch>
            <Route exact path="/trips">
              <Trips />
            </Route>
            <Route exact path="/trips/:id">
              <TripDetails currentUser={currentUser}/>
            </Route>
            <Route exact path="/login">
              <Login setCurrentUser={setCurrentUser} handleLogin={handleLogin} handleRegister={handleRegister}/>
            </Route>
            <Route exact path="/resources">
              <Resources />
            </Route>
          </Switch>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
