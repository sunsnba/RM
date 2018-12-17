import React, {Component} from 'react';
import '../styles/styles.css';
// importing files and JSON data
import JSONString from '../JSONString';
import Header from './Header';
import PanelA from './PanelA';
import PanelB from './PanelB';

   // takes in the JSON string, parses it. Consider putting this in componentDidMount...
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
    // hide/shows header data based on clicking '-' or '+' button
  headerClick = () => {
    this.setState(prevState => ({
      isPositive: !prevState.isPositive,
    }));
  }
  // toggles panel data based on clicking panel b. Will change background color and hide/show the data.
  // does this by checking if bShow in our board state is true.
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