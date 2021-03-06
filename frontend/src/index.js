import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import * as serviceWorker from './serviceWorker';
import configureStore from './store/store';
// We will use this to parse the user's session token
import jwt_decode from 'jwt-decode';
// The session utility we just created
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import './styles/main.scss'

// Window testing
import { fetchProducts, fetchProduct, postProduct, deleteProduct } from './util/product_api_util';
import { getProduct, getProducts, createProduct, destroyProduct } from './actions/product_actions';
import { getCategory, getCategories, createCategory, destroyCategory } from './actions/category_actions';
import { fetchCategories, fetchCategory, postCategory, deleteCategory } from './util/categories_api_util';
window.getProduct = getProduct;
window.getProducts = getProducts;
window.createProduct = createProduct;
window.destroyProduct = destroyProduct;
window.deleteProduct = deleteProduct;
window.postProduct = postProduct;
window.fetchProducts = fetchProducts;
window.fetchProduct = fetchProduct;

window.deleteCategory = deleteCategory;
window.postCategory = postCategory;
window.fetchCategories = fetchCategories;
window.fetchCategory = fetchCategory;
window.getCategory = getCategory;
window.getCategories = getCategories;
window.createCategory = createCategory;
window.destroyCategory = destroyCategory;

window.testProduct = {
    title: "Test Product3",
    description: "This is a test product3",
    code: "ABC",
    width: 100,
    height: 100,
    per_unit: 5,
    per_ft_install_fee: 1,
    flat_install_fee: 150,
    sq_ft_0: 5,
    sq_ft_1: 6,
    sq_ft_2: 7,
    sq_ft_3: 8,
    imgString: "example.jpg",
    category: "Fence"
}

window.testCategory = {
    title: "Test2"
}

////

document.addEventListener('DOMContentLoaded', () => {
    let store;

    // If a returning user has a session token stored in localStorage
    if (localStorage.jwtToken) {

        // Set the token as a common header for all axios requests
        setAuthToken(localStorage.jwtToken);

        // Decode the token to obtain the user's information
        const decodedUser = jwt_decode(localStorage.jwtToken);

        // Create a preconfigured state we can immediately add to our store
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;

        // If the user's token has expired
        if (decodedUser.exp < currentTime) {
            // Logout the user and redirect to the login page
            store.dispatch(logout());
            window.location.href = '/login';
        }
    } else {
        // If this is a first time user, start with an empty store
        store = configureStore({});
    }
    // WINDOW TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //

    // Render our root component and pass in the store as a prop
    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root);
});

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
