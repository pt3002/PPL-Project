import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage';
import SignUpPage from './Pages/Sign-UpPage/SignUpPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import FAQ from './Pages/FAQ/FAQ';
import AboutUs from './Pages/AboutUs/AboutUs';
import WelcomePage from './Pages/WelcomePage/WelcomePage';
import AddPlaceForm from './Pages/AddPlaceForm/AddPlaceForm';
import UsersList from './Pages/UsersList/UsersList';
import Places from './Pages/Places/Places';
import FilterPage from './Pages/FilterPage/FilterPage';
import Filter from './Pages/Filter/Filter';
import FilterRating from './Pages/FilterPage/FilterRating';
import FilterCreator from './Pages/FilterPage/FilterCreator';
import UserED from './Pages/UserED/UserED';
import EditLocation from './Pages/EditLocation/EditLocation';
import Editprofile from './Pages/EditProfile/Editprofile';
import StartingPage from './Pages/StartingPage/StartingPage';

const App = () => {

  const [user, setLoginUser] = useState({})
  if (user!=undefined &&  user.name != undefined) {
    localStorage.setItem("name", user.name);
  }
  
  //Users List
  const [lists, setLists] = useState([])

  //Places List
  const [places, setPlaces] = useState([])
  //Axios for User list
  useEffect(() => {
    axios.get('https://travelarena.herokuapp.com/userslist')
      .then(res => setLists(res.data))
      .catch(error => console.log(error));
  }, [])

  //Axios for List of places
  useEffect(() => {
    axios.get('https://travelarena.herokuapp.com/places')
      .then(res => setPlaces(res.data))
      .catch(error => console.log(error));
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <StartingPage name={user.name} setLoginUser={setLoginUser} /> : <WelcomePage />
            }
          </Route>
          <Route path="/login">
            <LoginPage
              setLoginUser={setLoginUser} />
          </Route>
          <Route path="/signup" >
            <SignUpPage setLists={setLists} />
          </Route>
          <Route path="/startingpage">
            <StartingPage name={user.name} />
          </Route>
          <Route path="/faq">
            <FAQ name={user.name} />
          </Route>
          <Route path="/aboutus">
            <AboutUs name={user.name}/>
          </Route>
          <Route path="/addplace">
            <AddPlaceForm name={user.name} setPlaces={setPlaces} setLoginUser={setLoginUser} />
          </Route>
          <Route path="/filterpage">
            <FilterPage name={user.name}/>
          </Route>
          <Route path="/filter">
            <Filter name={user.name}/>
          </Route>
          <Route path="/filterrating">
            <FilterRating name={user.name}/>
          </Route>
          <Route path="/filtercreator" render={() => <FilterCreator places={places} name={user.name}/>} />
          <Route path="/places" render={() => <Places places={places} name={user.name}/>} />
          <Route path="/userslist" render={() => <UsersList lists={lists} name={user.name}/>} />
          <Route path="/usered">
            <UserED name={user.name} />
          </Route>
          <Route path="/editprofile">
            <Editprofile name={user.name}/>
          </Route>
          <Route path="/editlocation/:id">
            <EditLocation />
          </Route>
        </Switch>
      </Router>

    </div>
  );
};


export default App;

