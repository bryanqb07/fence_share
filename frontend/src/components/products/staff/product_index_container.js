import { connect } from 'react-redux';
import { getProducts, getProduct, createProduct, updateProduct, destroyProduct } from '../../../actions/product_actions';
import ProductsIndex from './product_index';

const mapStateToProps = (state) => ({
    errors: state.errors.products,
    products: state.entities.products
})

const mapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch(getProducts()),
    getProduct: product_id => dispatch(getProduct(product_id)),
    // updateProduct: product => dispatch(updateProduct(product)),
    createProduct: product => dispatch(createProduct(product)),
    destroyProduct: product_id => dispatch(destroyProduct(product_id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsIndex);