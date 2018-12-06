import React, {Component} from 'react';
import './App.css'

class Header extends Component {
    constructor(props) {
    super(props)

    }


render (props) {

    let shouldRenderHeader = this.props.isPositive

    let headerContent = shouldRenderHeader ? (
        <div className="HeadStyle" >
        <input className="plus-button" type="button" value="+" onClick={this.props.headerClick} />
        </div>
    ) : (
        <div className="HeadStyle" >
            {this.props.hData.map((el, index) => {
                return <ul key={index}>{el}</ul>
            }, this)}
        <input className="minus-button" type="button" value="-" onClick={this.props.headerClick} />
            </div>
    )
    return (
        <div> {headerContent} </div>
    )
}

}
export default Header