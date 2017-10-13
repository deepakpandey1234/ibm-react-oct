import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Comp2 extends Component {
    render() {
        return (
            <div className="well">
                <span className="badge">Comp-2</span>
                {this.props.prop1}
                {this.context.color}
            </div>
        );
    }
}

Comp2.contextTypes = {
    color: PropTypes.string
};

export default Comp2;