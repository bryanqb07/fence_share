import React from 'react';

class ProductView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getProduct(this.props.match.params.id);
    }

    render() {
        const product = this.props.product;
        return product ? (
            <div>
                <img src="testFence.png"/>
                <p>Title: {product.title}</p>
                <p>Description: {product.description}</p>
            </div>
        ) : <div className="loader">Loading...</div>
    }
}

export default ProductView;