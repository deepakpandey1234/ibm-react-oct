import React, { Component } from 'react';
import classnames from 'classnames';
import ProductReviewForm from './ProductReviewForm';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 1
        }
    }

    changeTab(tabIndex) {
        this.setState({
            tab: tabIndex,
            showReviewForm: false
        });
    }


    renderReviews() {
        let { product } = this.props;
        return product.reviews.map((review, idx) => {
            return (
                <div className="alert alert-info" key={idx}>
                    <span className="badge">{review.stars}</span> &mdash; {review.author}
                    <hr />
                    <p>{review.message}</p>
                </div>
            )
        })
    }

    renderTabPanel() {
        let { tab } = this.state;
        let { product,addNewReview } = this.props;
        let tabPanel;
        if (tab === 1) {
            tabPanel = (<div className="panel"><p>{product.description}</p></div>)
        }
        if (tab === 2) {
            tabPanel = (<div className="panel"><p>Not Yet</p></div>)
        }
        if (tab === 3) {
            let { showReviewForm } = this.state;
            tabPanel = (
                <div className="panel">
                    {this.renderReviews()}
                    <hr />
                    <a className="btn btn-primary"
                        onClick={() => { this.setState({ showReviewForm: !this.state.showReviewForm }) }}>
                        {showReviewForm ? 'Hide' : 'New Review'}
                    </a>
                    {showReviewForm ? <ProductReviewForm addNewReview={addNewReview} hideReviewForm={()=>{this.setState({showReviewForm:false})}} product={product}/> : ''}
                </div>
            )
        }
        return tabPanel;
    }

    render() {
        let { product, addToCart } = this.props;
        let { tab } = this.state;
        let buyBtn;
        if (product.canBuy) {
            buyBtn = <button className="btn btn-primary" onClick={() => { addToCart(product) }}>buy</button>
        }
        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3">
                        <img src={product.imagePath} className="img-responsive" />
                    </div>
                    <div className="col-xs-9 col-sm-9 col-md-9">
                        <h4>{product.name}</h4>
                        <h5>&#8377;{product.price}</h5>
                        {buyBtn}
                        <hr />
                        <section>
                            <ul className="nav nav-tabs">
                                <li className={classnames({ active: tab === 1 })}><a onClick={this.changeTab.bind(this, 1)} href="#">Description</a></li>
                                <li className={classnames({ active: tab === 2 })}><a onClick={this.changeTab.bind(this, 2)} href="#">Specification</a></li>
                                <li className={classnames({ active: tab === 3 })}><a onClick={this.changeTab.bind(this, 3)} href="#">Reviews</a></li>
                            </ul>
                            {this.renderTabPanel(product)}
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;