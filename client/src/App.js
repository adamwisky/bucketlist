import React, { Component } from 'react';
import MainView from './Components/MainView';

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navbar-brand">
            BucketList App
          </div>
        </div>
        <MainView/>
    </div>
    );
  }
}

export default App;
