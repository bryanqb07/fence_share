import { connect } from 'react-redux';
import { getCategories, getCategory, createCategory, destroyCategory } from '../../actions/category_actions';
import CategoriesIndex from './category_index';

const mapStateToProps = (state) => ({
    errors: state.errors.categories,
    categories: state.entities.categories
})

const mapDispatchToProps = (dispatch) => ({
    getCategories: () => dispatch(getCategories()),
    getCategory: category_id => dispatch(getCategory(category_id)),
    // updateProduct: product => dispatch(updateProduct(product)),
    createCategory: category => dispatch(createCategory(category)),
    destroyCategory: category_id => dispatch(destroyCategory(category_id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesIndex);