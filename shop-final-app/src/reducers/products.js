
import { LOAD_PRODUCTS, LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants'

let initialState = {
    products: []
}

export function productsReducer(state = initialState.products, action) {
    switch (action.type) {
        case LOAD_PRODUCTS: {
            return [...action.products];
        }
        default: {
            return state;
        }
    }
}