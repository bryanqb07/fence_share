import { connect } from 'react-redux';
import { getProduct } from '../../../actions/product_actions';
import ProductView from './product_view';

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch) => ({
    getProduct: product_id => dispatch(getProduct(product_id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductView);