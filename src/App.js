import React, { Component } from 'react';
import './styles/styles.css';
import Header from './components/Header';
import PanelA from './components/PanelA';
import PanelB from './components/PanelB';
import JSONString from './JSONString';

let data = JSON.parse(JSONString);

class App extends Component {
  constructor(props) {
    super(props)

  this.state = {
    hData: data.headerData,
    contA: data.contentA,
    contB: data.contentB,
    isPositive: false,
    bShow: false,
  }
  this.headerClick = this.headerClick.bind(this);   
  this.togglePanels = this.togglePanels.bind(this); 
  }

  headerClick = () => {
    this.setState(prevState => ({
      isPositive: !prevState.isPositive,
    }));
  }

  togglePanels = () => {
    this.setState(prevState => ({
      bShow: !prevState.bShow,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Header hData={this.state.hData} headerClick={this.headerClick} isPositive={this.state.isPositive}/>
        </header>
        <PanelA contA={this.state.contA} bShow={this.state.bShow} isPositive={this.state.isPositive}/>
        <PanelB contB={this.state.contB} bShow={this.state.bShow} isPositive={this.state.isPositive} 
        togglePanels={this.togglePanels}
        />
      </div>
    );
  }
}

export default App;
