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
        <div className="A"> {this.props.contA} </div>
    )
    return (
        <div> {panel1} </div>
    );
    }
}

export default PanelA;

