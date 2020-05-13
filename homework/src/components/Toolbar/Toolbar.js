import React from 'react';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__logo"><a href="/">CURRENCY CONVERTER</a></div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/">Sign in</a></li>
          <li><a href="/">Sign up</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;