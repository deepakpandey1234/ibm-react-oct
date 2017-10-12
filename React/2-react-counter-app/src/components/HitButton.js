import React, { Component } from 'react';

class HitButton extends Component {
    constructor(props) {
        super(props);
        console.log('HitButton instance created..');
    }
    render() {
        console.log('HitButton rendered..');
        return (
            <div className="well" style={{ float: 'left', margin: '5px' }}>
                <button onClick={()=>{this.props.onHit(this.props.value)}} className="btn btn-lg btn-primary">+{this.props.value}</button>
            </div>
        );
    }
}

export default HitButton;