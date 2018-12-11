import React, {Component} from 'react';

class PanelB extends Component {
    constructor(props) {
        super(props)
    }

render () {

    let shouldRender = this.props.isPositive && this.props.bShow || this.props.bShow;

    let panel2 = shouldRender ? (
        <button className="C" onClick={this.props.togglePanels}> {this.props.contB} </button>
    ) : (
        <button className="B" onClick={this.props.togglePanels}> </button>  
    )
    return (
        <div> {panel2} </div>
    )
    }
}

export default PanelB;

