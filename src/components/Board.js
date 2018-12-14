import React, {Component} from 'react';
import '../styles/styles.css'
import Header from './Header';
import JSONString from '../JSONString';


let data = JSON.parse(JSONString);

class Board extends Component {
  constructor(props) {
      super(props)

      this.state = {
        hData: data.headerData,
      }
      this.headerClick = this.headerClick.bind(this);
  }

  headerClick = () => {
    this.setState(prevState => ({
      isPositive: !prevState.isPositive,
    }));
  }

render (props) {
    return (
        <div className="board">
         <Header hData={this.state.hData} headerClick={this.headerClick} isPositive={this.state.isPositive}/>
        </div>
    )
  }
}

export default Board;