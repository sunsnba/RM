import React, {Component} from 'react';
import '../styles/styles.css'
import Header from './Header';
import JSONString from '../JSONString';
import PanelA from './PanelA';
import PanelB from './PanelB';


let data = JSON.parse(JSONString);

class Board extends Component {
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

render (props) {
    return (
        <div className="board">
         <Header hData={this.state.hData} headerClick={this.headerClick} isPositive={this.state.isPositive}/>
           <div className="PanelContainer" >
         <PanelA contA={this.state.contA} bShow={this.state.bShow} isPositive={this.state.isPositive}/>
        <PanelB contB={this.state.contB} bShow={this.state.bShow} isPositive={this.state.isPositive} 
        togglePanels={this.togglePanels}
        />
          </div>
        </div>
    )
  }
}

export default Board;