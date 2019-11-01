import React from 'react';
import ProductDetail from './product_detail';

class ProductsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProduct();
    }

    render() {
        const product = this.props.product;
        // if(products){
        return (
            <div>
                
            </div>
        )

    }
}

export default ProductsIndex;