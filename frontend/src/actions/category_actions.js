import * as APIUtil from '../util/categories_api_util';

export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const DELETE_CATEGORY = "DELETE_CATEGORY"
export const RECEIVE_CATEGORY_ERRORS = "RECEIVE_CATEGORY_ERRORS";

// We'll dispatch this when our user signs in
export const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
});

export const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
});

export const deleteCategory = category => ({
    type: DELETE_CATEGORY,
    category
});

export const receiveErrors = errors => ({
    type: RECEIVE_CATEGORY_ERRORS,
    errors
});

export const getCategory = category_id => dispatch => (
    APIUtil.fetchCategory(category_id).then((category) => (
        dispatch(receiveCategory(category))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const getCategories = () => dispatch => (
    APIUtil.fetchCategories().then( categories => (
        dispatch(receiveCategories(categories))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const createCategory = category => dispatch => (
    APIUtil.postCategory(category).then((newCategory) => (
        dispatch(receiveCategory(newCategory))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const destroyCategory = category_id => dispatch => (
    APIUtil.deleteCategory(category_id).then((category_id) => (
        dispatch(deleteCategory(category_id))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);