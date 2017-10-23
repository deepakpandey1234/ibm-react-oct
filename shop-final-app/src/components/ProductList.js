import React, { Component } from 'react';
import Product from './Product'

class ProductList extends Component {

    renderProducts() {
        let { products, addToCart,addNewReview } = this.props;
        return products.map((product, idx) => {
            return <Product product={product} key={idx} addToCart={addToCart} addNewReview={addNewReview}/>
        });
    }

    render() {
        let { products } = this.props;
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">Product List | {products.length} items in shop</div>
                <div className="panel-body">
                    {this.renderProducts()}
                </div>
            </div>
        );
    }
}

export default ProductList;