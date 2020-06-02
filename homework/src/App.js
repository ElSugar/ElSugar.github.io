import React, { Component } from 'react';

import fire from './config/Fire';
import Login from './components/Home'
import Home from './components/LoginRegister'

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return (
        <div>
          {this.state.user ? (<Login />) : (<Home />)}
        </div>
    );
  }
}

export default App;
