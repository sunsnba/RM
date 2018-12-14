import React, { Component } from 'react';
import './styles/styles.css';
import PanelA from './components/PanelA';
import PanelB from './components/PanelB';
import JSONString from './JSONString';
import Board from './components/Board';

let data = JSON.parse(JSONString);

class App extends Component {
  constructor(props) {
    super(props)

  this.state = {
    contA: data.contentA,
    contB: data.contentB,
    isPositive: false,
    bShow: false,
  }  
  this.togglePanels = this.togglePanels.bind(this); 
  }

  togglePanels = () => {
    this.setState(prevState => ({
      bShow: !prevState.bShow,
    }));
  }

  render() {
    return (
      <div className="App">
        <Board isPositive={this.state.isPositive}/>
        <PanelA contA={this.state.contA} bShow={this.state.bShow} isPositive={this.state.isPositive}/>
        <PanelB contB={this.state.contB} bShow={this.state.bShow} isPositive={this.state.isPositive} 
        togglePanels={this.togglePanels}
        />
      </div>
    );
  }
}

export default App;
