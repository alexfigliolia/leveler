import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0
    }
  }
  componentDidMount() {
    if(window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this.updateMoveX, true);
    }
  }

  updateMoveX = (e) => {
    const x = (((e.gamma* 100) / 90) * (window.innerWidth / 2)) / 100;
    this.setState({ x: x });
  }

  render() {
    console.log(this.state.x);
    return (
      <div className="App" style={{height: window.innerHeight}}>
        <h1>Leveler</h1>
        <div className="leveler">
          <div 
            className="ball"
            style={{
              transform: `translateX(${this.state.x}px)`
            }}></div>
        </div>
      </div>
    );
  }
}

export default App;
