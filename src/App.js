/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
//import logo from './logo.svg';
import HIVKnowledge from './js/HIVKnowledge';

//<img src={logo} className="App-logo" alt="logo" />

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AIDS statistics</h1>
        </header>
        <p className="App-intro">
          Plotted using recharts below.
        </p>
        <HIVKnowledge />
      </div>
    );
  }
}

export default App;
