import {
    RECEIVE_PRODUCT_ERRORS,
    RECEIVE_PRODUCT,
    DELETE_PRODUCT
} from '../actions/product_actions';

const _nullErrors = [];

const ProductErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRODUCT_ERRORS:
            return action.errors;
        case RECEIVE_PRODUCT:
            return _nullErrors;
        case DELETE_PRODUCT:
            return _nullErrors;
        default:
            return state;
    }
};

export default ProductErrorsReducer;