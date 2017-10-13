import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div className="alert alert-danger">
                {this.props.children}
            </div>
        );
    }
}

export default Box;