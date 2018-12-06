import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import PanelA from './PanelA';
import PanelB from './PanelB';
import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props)

  this.state = {
    hData: data.headerData,
    contA: data.contentA,
    contB: data.contentB,
  }    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Header hData={this.state.hData}/>
        </header>
        <PanelA />
        <PanelB />
      </div>
    );
  }
}

export default App;
