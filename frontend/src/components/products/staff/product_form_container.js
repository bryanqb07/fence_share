import { connect } from 'react-redux';
import { createProduct } from '../../../actions/product_actions';
import ProductForm from './product_form';

const mapStateToProps = (state) => ({
    errors: state.errors.products
})

const mapDispatchToProps = (dispatch) => ({
    createProduct: product => dispatch(createProduct(product))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductForm);