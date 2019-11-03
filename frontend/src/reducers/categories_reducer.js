import {
    RECEIVE_CATEGORY,
    RECEIVE_CATEGORIES,
    DELETE_CATEGORY
} from '../actions/category_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CATEGORY:
            newState[action.category.data._id] = action.category.data
            return newState
        case RECEIVE_CATEGORIES:
            action.categories.data.map(category => newState[category._id] = category);
            return newState;
        case DELETE_CATEGORY:
            delete newState[action.product.data.category_id]
            return newState;
        default:
            return state;
    }
}
