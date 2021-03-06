<<<<<<< HEAD
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import UserCard from './pages/UserCard';
import landing from './pages/landing';
import login from './pages/login';
import signup from './pages/signup';
import questionnaire from './pages/questionnaire';
import results from './pages/results';
import HowTo from './pages/HowTo';


//import home from './pages/home'; <Route exact path="/" component={home}/>


function App() {
  return (
      <Router>
    <div>
       <Switch>
          <Route exact path="/" component={landing}/>
          <Route exact path="/login" component={login}/>
          <Route exact path="/signup" component={signup}/>     
          <Route exact path="/questionnaire" component={questionnaire}/>  
          <Route exact path="/results" component={results}/>
          <Route exact path="/user-profile" component={UserCard}/> 
          <Route exact path="/HowTo" component={HowTo}/> 
        </Switch>
    </div>
</Router>
  );
}
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import landing from './pages/landing';
import login from './pages/login';
import signup from './pages/signup';
import questionnaire from './pages/questionnaire';
import results from './pages/results';


//import home from './pages/home'; <Route exact path="/" component={home}/>

import React from 'react';
function App() {
  return (
      <Router>
    <div>
       <Switch>
          <Route exact path="/" component={landing}/>
          <Route exact path="/login" component={login}/>
          <Route exact path="/signup" component={signup}/>     
          <Route exact path="/questionnaire" component={questionnaire}/>  
          <Route exact path="/results" component={results}/>  
          </Switch>
    </div>
</Router>
  );
}
>>>>>>> 4a9f81e43793261508c08c196df510645f8e50cc
export default App;