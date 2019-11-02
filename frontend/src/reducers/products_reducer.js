// import { merge } from 'lodash.merge';

import {
    RECEIVE_PRODUCT,
    RECEIVE_PRODUCTS,
    DELETE_PRODUCT
} from '../actions/product_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PRODUCT:
            newState[action.product.data._id] = action.product.data
            return newState
        case RECEIVE_PRODUCTS:
            action.products.data.map(product => newState[product._id] = product);
            return newState;
        default:
            return state;
    }
};