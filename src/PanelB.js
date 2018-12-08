import React, {Component} from 'react';

class PanelB extends Component {
    constructor(props) {
        super(props)
    }

render () {

    let shouldRender = this.props.isPositive && this.props.bShow || this.props.bShow;

    let panel2 = shouldRender ? (
        <div className="C"> {this.props.contB} </div>
    ) : (
        <div className="B">  </div>
    )
    return (
        <div > {panel2}  </div>
    )
    }
}

export default PanelB;

