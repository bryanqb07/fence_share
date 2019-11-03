import React from 'react';
import { withRouter } from 'react-router-dom';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to home page
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.currentUser === true) {
    //         this.props.history.push('/');
    //     }

    //     // Set or clear errors
    //     this.setState({ errors: nextProps.errors })
    // }

    // Handle field updates (called in the render method)
    // update(field) {
    //     return e => this.setState({
    //         [field]: e.currentTarget.value
    //     });
    // }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();
        this.props.createCategory(this.state);
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
                <h2>Create New Category</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div className=".flex">
                            <label>Title</label>
                            <input type="text"
                                value={this.state.title}
                                onChange={ (e) => this.setState({ title: e.currentTarget.value })}
                            />
                        </div>
                        <input type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(CategoryForm);