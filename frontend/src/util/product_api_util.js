import axios from 'axios';

export const postProduct = product => {
    return axios.post('/api/products', product);
};

export const fetchProduct = product_id => {
    return axios.get(`/api/products/${product_id}`);
};

export const fetchProducts = () => {
    return axios.get('/api/products');
};

export const deleteProduct = product_id => {
    return axios.post('/api/products/delete', {product_id});
};