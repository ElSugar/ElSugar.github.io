import React from 'react';
import './Toolbar.css';

import { BrowserRouter, Route, Link } from "react-router-dom";
import SignUp from '../../signUp/signUp';
import SignIn from '../../signIn/signIn';
import Home from '../Home';

const toolbar = props => (
  <BrowserRouter>
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo"><p>CURRENCY CONVERTER</p></div>
        <div className="spacer"></div>
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to="/sign-in">Sign in</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <hr />
      <div className="main-route-place">
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </div>
  </BrowserRouter>
  
);

export default toolbar;