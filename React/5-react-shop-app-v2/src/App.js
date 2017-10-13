import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import ProductList from './components/ProductList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      products: [
        {
          id: 1,
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          canBuy: true,
          imagePath: "images/Laptop.png",
          reviews: [
            { stars: 5, author: 'nag@gmail.com', message: 'good one' },
            { stars: 1, author: 'indu@gmail.com', message: 'costly one' }
          ]
        },
        {
          id: 2,
          name: 'Mobile',
          price: 18000,
          description: 'New model',
          canBuy: true,
          imagePath: "images/Mobile.png",
          reviews: [
            { stars: 5, author: 'nag@gmail.com', message: 'good one' },
            { stars: 1, author: 'indu@gmail.com', message: 'costly one' }
          ]
        }
      ]
    };

    this.addToCart = this.addToCart.bind(this);
    this.addNewReview = this.addNewReview.bind(this);

  }

  addToCart(item) {
    this.setState({
      cart: this.state.cart.concat(item)
    });
  }
  addNewReview(review, product) {
    this.setState(
      {
        products: this.state.products.map(p => {
          if (p.id === product.id) {
            return Object.assign({}, p, { reviews: [...p.reviews, review] });
          } else {
            return p;
          }
        })
      }
    );
  }

  render() {
    let { products } = this.state;
    return (
      <div className="container">
        <div className="page-header">shopIT</div>
        <span className="badge">{this.state.cart.length}</span> in cart
        <span className="pull-right"><a href="#">View Cart</a></span>
        <hr />
        <ProductList products={products} addToCart={this.addToCart} addNewReview={this.addNewReview} />
      </div>
    );
  }
}

export default App;
