import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

// We'll dispatch this when our user signs in
export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const deleteProduct = product => ({
    type: DELETE_PRODUCT,
    product
});

export const receiveErrors = errors => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
});

export const getProduct = product_id => dispatch => (
    APIUtil.fetchProduct(product_id).then((product) => (
        dispatch(receiveProduct(product))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const getProducts = () => dispatch => (
    APIUtil.fetchProducts().then((products) => (
        dispatch(receiveProducts(products))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const createProduct = product => dispatch => (
    APIUtil.postProduct(product).then((newProduct) => (
        dispatch(receiveProduct(newProduct))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const destroyProduct = product_id => dispatch => (
    APIUtil.deleteProduct(product_id).then((product_id) => (
        dispatch(deleteProduct(product_id))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

// // Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
// export const login = user => dispatch => (
//     APIUtil.login(user).then(res => {
//         const { token } = res.data;
//         localStorage.setItem('jwtToken', token);
//         APIUtil.setAuthToken(token);
//         const decoded = jwt_decode(token);
//         dispatch(receiveCurrentUser(decoded))
//     })
//         .catch(err => {
//             dispatch(receiveErrors(err.response.data));
//         })
// )

// // We wrote this one earlier
// export const logout = () => dispatch => {
//     localStorage.removeItem('jwtToken')
//     APIUtil.setAuthToken(false)
//     dispatch(logoutUser())
// };