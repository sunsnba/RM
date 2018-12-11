import React, {Component} from 'react';

class PanelA extends Component {
    constructor(props) {
        super(props)
    }

render () {

    let shouldRender = this.props.isPositive && this.props.bShow || this.props.bShow

    let panel1 = shouldRender ? (
        <div className="D">  </div>
    ) : (
        <button className="A"> {this.props.contA} </button>
    )
    return (
        <div> {panel1} </div>
    );
    }
}

export default PanelA;

