
import $ from 'jquery';

import { LOAD_PRODUCTS, LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants'

//---------------------------------------

function loadProducts(products) {
    return { type: LOAD_PRODUCTS, products }
}
function loadReviews() {
    return { type: LOAD_REVIEWS }
}
function addNewReview(review) {
    return { type: ADD_NEW_REVIEW, review }
}

//---------------------------------------

const apiUrl = "http://0.0.0.0:3000/api/products"

export function loadProductsAsync() {
    return function (dispatch) {
        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: function (products) {
                dispatch(loadProducts(products));
            }
        })

    }
}
