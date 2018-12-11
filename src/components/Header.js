import React, {Component} from 'react';
import '../styles/styles.css'

class Header extends Component {
    constructor(props) {
    super(props)

    }


render (props) {

    let headerContent = this.props.isPositive ? (
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