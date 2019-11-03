import { combineReducers } from 'redux';

import ProductsReducer from './products_reducer';
import CategoriesReducer from './categories_reducer'

export default combineReducers({
    products: ProductsReducer,
    categories: CategoriesReducer
});