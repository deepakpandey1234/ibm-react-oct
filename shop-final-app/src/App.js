import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import 'bootstrap/dist/css/bootstrap.css';

import { bindActionCreators } from 'redux';

import ProductList from './components/ProductList';

class App extends Component {

  componentDidMount() {
    let { actions } = this.props;
    actions.loadProductsAsync(); // n/w call
  }

  render() {
    console.log('App:: render');
    let { products } = this.props;
    console.log(products);
    return (
      <div className="container">
        <div className="page-header">shopIT</div>
        <span className="badge">{0}</span> in cart
        <span className="pull-right"><a href="#">View Cart</a></span>
        <hr />
        <ProductList products={products} />
      </div>
    );
  }
}

// pls refer : HOC ( Higher Order Component) design pattern

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
