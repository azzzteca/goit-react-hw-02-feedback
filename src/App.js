import React, { Component } from 'react';
import Feedback from './components/Feedback/Feedback';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className="App">
        <Feedback feedback={this.state} />
      </div>
    );
  }
}

export default App;
