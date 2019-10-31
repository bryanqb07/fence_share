import React from 'react';
import { Link } from 'react-router-dom'

export default () => (
    <div>
        <Link to="/staff/products">Products</Link>
        <br/>
        <Link to="/staff/orders">Orders</Link>
        <br/>
        <Link to="/staff/customers">Customers</Link>
        <br />
        <Link to="/staff/settings">Settings</Link>
    </div>
)