import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Toolbar from '../components/Toolbar/Toolbar';
import Converter from './Converter/Converter';

import Login from "../signUp/signUp";

class House extends Component {
  render() {
    return (
      <div className="App">
        
        <Toolbar />
        <main style={{marginTop: '64px'}}>
          <Converter/>
        </main>
      </div>
    );
  }
}

export default House;