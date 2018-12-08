import React, { Component } from 'react';
import logo from '#/assets/logo.svg';
import '#/assets/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{`Hello ${this.props.firstname}`}</p>
        </header>
      </div>
    );
  }
}

export default App;
