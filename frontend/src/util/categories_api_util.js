import axios from 'axios';

export const postCategory = category => {
    return axios.post('/api/categories', category);
};

export const fetchCategory = category_id => {
    return axios.get(`/api/categories/${category_id}`);
};

export const fetchCategories = () => {
    return axios.get('/api/categories');
};

export const deleteCategory= category => {
    return axios.post('/api/categories/delete', { category });
};