import React, { Component } from 'react';

class ProductReviewForm extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     stars: 1,
        //     author: '',
        //     message: ''
        // }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        let { product, addNewReview, hideReviewForm } = this.props;
        let review = {
            stars: this.refs.stars.value,
            author: this.refs.author.value,
            message: this.refs.message.value
        }
        addNewReview(review, product);
        hideReviewForm();
    }

    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">New Review Form </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>stars</label>
                            <select className="form-control" ref="stars">
                                <option>-select-</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>author</label>
                            <input className="form-control" ref="author" />
                        </div>
                        <div className="form-group">
                            <label>message</label>
                            <textarea className="form-control" ref="message"></textarea>
                        </div>
                        <button className="btn btn-primary">submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ProductReviewForm;