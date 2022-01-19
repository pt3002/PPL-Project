import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage';
import SignUpPage from './Pages/Sign-UpPage/SignUpPage';
import LoginPage from './Pages/LoginPage/LoginPage';

const App = () => {

  const[ user, setLoginUser] =useState({})

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <HomePage setLoginUser={setLoginUser} /> : <LoginPage setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <LoginPage 
            setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
};


export default App;

