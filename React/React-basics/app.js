

// // #1 component class ( without JSX )
// class Welcome extends React.Component {
//     render() {
//         let ele = React.createElement('div', null,
//             React.createElement('div', null,
//                 React.createElement('span', null, "Welcome to React!")
//             )
//         );
//         return ele;
//     }
// }


// #1 component class ( with JSX )
class Welcome extends React.Component {
    render() {
        let ele = (
            <div>
                <div><span>Welcome to React-worlds</span></div>
            </div>
        )
        return ele;
    }
}

//#2 create instance of component-class
let wel = React.createElement(Welcome, null, null);


//#3 Render to VirtualDOM
ReactDOM.render(wel, document.getElementById('root'));