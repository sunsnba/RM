import React, { Component } from 'react';
import Board from './components/Board';


class App extends Component {

  render() {
    // by mapping our board component with this array we can make + render three copies of the initial component
    const numberOfBoardContainers = [1, 2, 3];
    const threeBoards = numberOfBoardContainers.map((ele, ind) => {
      return <div className="boards-container" key={'wrapBoardContainer' + ind}>
        <Board id={ind}
       key={'BoardContainer' + ind} />
       </div>
    });

    return (
      <div >
        {threeBoards}
      </div>
    );
  };
};

export default App;
