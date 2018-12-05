import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import PanelA from './PanelA';
import PanelB from './PanelB';

class App extends Component {
  constructor(props) {
    super(props)

    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Header />
        </header>
        <PanelA />
        <PanelB />
      </div>
    );
  }
}

export default App;
