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

const App = () => {

  const [user, setLoginUser] = useState({})

  //Users List
  const [lists, setLists] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:9002/userslist')
      .then(res=>setLists(res.data))
      .catch(error => console.log(error));
  })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <HomePage setLoginUser={setLoginUser} /> : <WelcomePage />
            }
          </Route>
          <Route path="/login">
            <LoginPage
              setLoginUser={setLoginUser} />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/addplace">
            <AddPlaceForm />
          </Route>
          <Route to="/userslist" render={() => <UsersList lists={lists}/>} />
        </Switch>
      </Router>

    </div>
  );
};


export default App;

