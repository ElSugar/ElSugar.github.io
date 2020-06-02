import React, {Component} from 'react';
import fire from '../../config/Fire';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Toolbar.css';

import Home from '../Home';

class toolbar extends Component {
  logout = () => {
    fire.auth().signOut();
  }
  render(){
    return(
      <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo"><p>CURRENCY CONVERTER</p></div>
        <div className="spacer"></div>
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <a onClick={this.logout} style={{cursor: 'pointer'}}>Log out</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    )
}
}
export default toolbar;