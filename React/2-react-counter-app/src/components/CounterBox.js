
import React, { Component } from 'react';
import HitButton from './HitButton';
import Display from './Display';

class CounterBox extends Component {

    constructor(props) {
        super();
        console.log('CounterBox instance created');
        this.state = {
            count: 1
        };
    }
    incrementCount(v) {
        console.dir(this);
        this.setState({
            count: this.state.count + Number.parseInt(v,10)
        });
    }
    render() {
        console.log('CounterBox::render()');
        return (
            <div className="container">
                <div className="panel panel-danger">
                    <div className="panel-heading">{this.props.title}</div>
                    <div className="panel-body">
                        <div className="row">
                            <HitButton value="1" onHit={this.incrementCount.bind(this)} />
                            <HitButton value="10" onHit={this.incrementCount.bind(this)} />
                            <HitButton value="100" onHit={this.incrementCount.bind(this)} />
                        </div>
                        <hr />
                        <Display value={this.state.count} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CounterBox;