import React from 'react';
import CategoryDetail from './category_detail';
import CategoryForm from './category_form';

class CategoriesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const categories = this.props.categories;
        return (
        <div>
            <CategoryForm createCategory={this.props.createCategory} />
            {/* { categories ? Object.keys(categories).map(category_key =>
                <CategoryDetail product={categories[category_key]} key={category_key} />
            ) : "No categories available at this time"} */}
        </div>
        )
    }
}

export default CategoriesIndex;