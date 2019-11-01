import React from 'react';
import { withRouter } from 'react-router-dom';
import './product_form.css'

class ProductForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            code: '',
            // dimensions
            width: 0,
            height: 0,
            //
            //price
            per_unit: 0,
            per_ft_install_fee: 0,
            flat_install_fee: 0,
            sq_ft_0: 0, // price per square ft0-3 months
            sq_ft_1: 0,  // 3-6 months
            sq_ft_2: 0,  // 6-9 months
            sq_ft_3: 0,  // 9-12 months
            //
            imgString: '',    
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to home page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();
        this.props.createProduct(this.state);
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <h2>Create New Product</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div className=".flex">
                            <label>Title</label>
                            <input type="text"
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                        </div>
                        <br />
                        <div className=".flex">
                            <label>Description</label>
                            <textarea 
                                value={this.state.description}
                                onChange={this.update('description')}>
                            </textarea>
                        </div>
                        <br />
                        <div className=".flex">
                            <label>Unique Product Code</label>
                            <input type="text"
                                value={this.state.code}
                                onChange={this.update('code')}
                                placeholder="ex. AX450" />
                        </div>
                        <br />
                        <h3>Dimensions</h3>
                        <div className=".flex">
                            <label>Width</label>
                            <input type="number"
                                value={this.state.width}
                                onChange={this.update('width')}
                                placeholder="0.0"/>
                        </div>
                        <br />
                        <div className=".flex">
                            <label>Height</label>
                            <input type="number"
                                value={this.state.height}
                                onChange={this.update('height')}
                                placeholder="0.0" />
                        </div>
                        <br />
                        <h3>Pricing</h3>
                        <div className=".flex">
                            <label className="currency-input">Price Per Unit $</label>
                            <input type="number"
                                value={this.state.per_unit}
                                onChange={this.update('per_unit')}
                                placeholder="0.0"
                                step="0.50"
                            />
                        </div>
                        <br />
                        <div className=".flex">
                        <label className="currency-input">Price Per Sq Ft Installation Fee $</label>
                        <input type="number"
                            value={this.state.per_ft_install_fee}
                            onChange={this.update('per_ft_install_fee')}
                            placeholder="0.0" />
                        </div>
                        <br />
                        <div className=".flex">
                            <label className="currency-input">Flat Installation Fee $</label>
                            <input type="number"
                                value={this.state.flat_install_fee}
                                onChange={this.update('flat_install_fee')}
                                placeholder="0.0" />
                        </div>
                        <br />
                        <div className=".flex">
                            <label className="currency-input">Price per Sq Ft. 0-3 Months Rental $</label>
                            <input type="number"
                                value={this.state.sq_ft_0}
                                onChange={this.update('sq_ft_0')}
                                placeholder="0.0" />
                        </div>
                        <br />
                        <div className=".flex">
                            <label className="currency-input">Price per Sq Ft. 3-6 Months Rental $</label>
                            <input type="number"
                                value={this.state.sq_ft_1}
                                onChange={this.update('sq_ft_1')}
                                placeholder="0.0" />
                        </div>
                        <br />
                        <div className=".flex">
                        <label className="currency-input">Price per Sq Ft. 6-9 Months Rental $</label>
                        <input type="number"
                            value={this.state.sq_ft_2}
                            onChange={this.update('sq_ft_2')}
                            placeholder="0.0" />
                        </div>
                        <br />
                                
                        <div className=".flex">
                            <label className="currency-input">Price per Sq Ft. 9-12 Months Rental $</label>
                            <input type="number"
                                value={this.state.sq_ft_3}
                                onChange={this.update('sq_ft_3')}
                                placeholder="0.0" />
                        </div>
                        <br />
                        <div className=".flex">
                            <label>Upload Image</label>
                            <input type="file"
                                value={this.state.imgString}
                                onChange={this.update('imgString')} className="currency-input"
                            />
                        </div>
                        <br />
                        <input type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(ProductForm);