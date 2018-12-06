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
    isPositive: false,
  }
  this.headerClick = this.headerClick.bind(this);    
  }

  headerClick = () => {
    this.setState(prevState => ({
      isPositive: !prevState.isPositive,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Header hData={this.state.hData} headerClick={this.headerClick} isPositive={this.state.isPositive}/>
        </header>
        <PanelA />
        <PanelB />
      </div>
    );
  }
}

export default App;
