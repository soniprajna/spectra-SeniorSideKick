import React from 'react';
import Header from '../components/Header';
import Content from './Content';
import UserCard from './UserCard';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import './App.css';
//import Link from '@material-ui/core/Link';

function Landing() {
  return (
    <div className="Landing">
      {/* header */}
      <Header /> {/* common for all the pages */}

      <Router>
        <Switch>
          <Route path="/chat">
            <h1>Chat Page</h1>
          </Route>
          <Route path="/questionnaire">
            <h1>Questionnaire</h1>
          </Route>
          <Route path="/user-details">
            <h1>User Details</h1>
            <UserCard />
          </Route>
          <Route path="/"> {/* default route has to be at the end */}
            <Content />
          </Route>
        </Switch>
        {/* i need help */}
        {/* i want to help */}
        {/* what we do */}
        {/* footer */}

        {/* chat screen */}
        {/* individual chat screen */}

        {/* questionnaire */}

        {/* list of volunteers */}

        {/* volunteer profile */}

        {/* user details */}
      </Router>
      <Footer />
    </div>
  );
}

export default Landing;
