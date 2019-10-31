import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to={'/profile'}>Profile</Link>
                    <Link to={'/'}>View Orders</Link>
                    <Link to={'/'}>Shopping Cart</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/users/login'}>Login</Link>
                    <Link to={'/'}>Shopping Cart</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h1>Rental Fence</h1>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;