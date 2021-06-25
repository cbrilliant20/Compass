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
import Resources from './screens/Resources/Resources';
import Register from "./screens/Register/Register"
import Login from './screens/Login/Login';
import { deleteFood, getAllTrips, postFood, putFood } from './services/trips';
import  MainContainer  from './containers/MainContainer';


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
            <Route path="/trips">
              <MainContainer currentUser={currentUser}/>
            </Route>
            <Route exact path="/login">
              <Login handleLogin={handleLogin} />
            </Route>
            <Route exact path="/register">
              <Register handleRegister={handleRegister} />
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
