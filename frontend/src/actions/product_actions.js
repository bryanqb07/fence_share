// import * as APIUtil from '../util/action_api_util';

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

// We'll dispatch this when our user signs in
export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const deleteProduct = product_id => ({
    type: RECEIVE_PRODUCTS,
    product_id
});

export const receiveErrors = errors => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
});

export const createProduct = product => ({
    product
})

// Upon signup, dispatch the approporiate action depending on which type of response we receieve from the backend
// export const signup = user => dispatch => (
//     APIUtil.signup(user).then(() => (
//         dispatch(receiveUserSignIn())
//     ), err => (
//         dispatch(receiveErrors(err.response.data))
//     ))
// );

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