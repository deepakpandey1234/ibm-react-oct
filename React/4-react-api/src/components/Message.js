import React, { Component } from 'react';

class Message extends Component {

    // Mountingmethods

    constructor(props) {
        //console.log('Message comp instance created..');
        console.log('Message::constructor()');
        super(props);
        // console.dir(props);
    }

    componentWillMount() {
        console.log('Message::componentWillMount()');
    }

    render() {
        console.log('Message render()');
        let { message } = this.props;
        return (
            <div className="alert alert-info">
                {message}
                <hr />
                <button onClick={() => { this.forceUpdate() }} className="btn btn-sm btn-warning">force re-render</button>
            </div>
        );
    }

    componentDidMount() {
        console.log('Message::componentDidMount()');
    }

    //-----------------------------------------------

    // Updating 

    componentWillReceiveProps(nextProps) {
        console.log('Message::componentWillReceiveProps()');
        //console.log(this.props);
        //console.log(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Message::shouldComponentUpdate()');
        return this.props.message !== nextProps.message;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Message::componentWillUpdate()');
    }

    componentDidUpdate() {
        console.log('Message::componentDidUpdate()');
    }
    //-----------------------------------------------
    
    // UnMounting

    componentWillUnmount() {
        console.log('Message::componentWillUnmount()');
    }

}

Message.defaultProps = {
    message: 'No Message'
}
Message.displayName = "IBM-Message";


export default Message;