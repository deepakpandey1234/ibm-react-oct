import React, { Component } from 'react';
import Comp2 from './Comp2'

class Comp1 extends Component {
    render() {
        return (
            <div className="well">
                <span className="badge">Comp-1</span>
                <Comp2 prop1={this.props.prop1} />
            </div>
        );
    }
}

export default Comp1;