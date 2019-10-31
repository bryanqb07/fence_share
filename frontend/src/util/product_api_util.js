export const postProduct = product => {
    return axios.post('/api/products', product);
};

export const getProduct = product_id => {
    return axios.get(`/api/products/${product_id}`, product_id);
};

export const getProducts = () => {
    return axios.get('/api/products');
};

export const destroyProduct = product_id => {
    return axios.get(`/api/products/${product_id}`, product_id);
};