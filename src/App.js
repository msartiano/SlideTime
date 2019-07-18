import React, { Component } from 'react';
import './style/App.css';
import './style/Timer.css';
import './style/RainbowText.css';
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
      </div>
    );
  }
}

export default App;
