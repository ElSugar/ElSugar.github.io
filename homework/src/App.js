import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Converter from './components/Converter/Converter';
/*import './App.css';*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <main style={{marginTop: '64px'}}>
          <Converter />
        </main>
      </div>
    );
  }
}

export default App;
