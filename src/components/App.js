import React, { Component } from 'react';
import '../App.css';
import '../scss/styles.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">One</div>
          <div className="col-md-6">Two</div>
        </div>
      </div>
    );
  }
}

export default App;
