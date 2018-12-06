import React, {Component} from 'react';
import './App.css'

class Header extends Component {
    constructor(props) {
    super(props)

    }


render (props) {
    return (
            <div className="HeadStyle">
            {this.props.hData.map((el, index) => {
                return <ul key={index}>{el}</ul>
            }, this)}
            </div>
    )
}

}
export default Header