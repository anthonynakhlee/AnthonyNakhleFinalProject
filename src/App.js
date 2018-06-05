import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Creepy from './Creepy.js';
import Paranormal from './Paranormal.js';
import Urban from './Urban.js';
import Contact from './Contact.js';
import AppRouter from './AppRouter.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter /> 
      </div>
    );
  }
}

export default App;
