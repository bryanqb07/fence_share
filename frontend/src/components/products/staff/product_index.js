import React from 'react';
import ProductDetail from './product_detail';

class ProductsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        return Object.keys(products).length > 0 ? (

            <div className="product-grid product-grid--flexbox">
                <div className="product-grid__wrapper">
                    {Object.keys(products).map(product_key =>
                        <ProductDetail product={products[product_key]} key={product_key} />)
                    }
                </div>
            </div>) : <div className="loader">No products available</div>      
    }
}

export default ProductsIndex;