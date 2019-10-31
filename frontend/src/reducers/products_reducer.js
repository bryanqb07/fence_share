import { merge } from 'lodash.merge';

import {
    RECEIVE_PRODUCT,
    RECEIVE_PRODUCTS,
    DELETE_PRODUCT
} from '../actions/product_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRODUCT:
            return merge({}, state, { [action.product.id]: action.product });
        case RECEIVE_PRODUCTS:
            return action.products;
        default:
            return state;
    }
};