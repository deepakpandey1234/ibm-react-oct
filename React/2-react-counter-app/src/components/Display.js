import React, { Component } from 'react';

class Display extends Component {
    constructor(props) {
        super(props);
        console.log('Display instance created..');
    }
    render() {
        console.log('Display::render');
        return (
            <div className="alert alert-info">
               value : {this.props.value}
            </div>
        );
    }
}

export default Display;