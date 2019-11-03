import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProductFormContainer from './products/staff/product_form_container';
import ProductViewContainer from './products/staff/product_view_container'
import CategoriesContainer from './categories/categories_container'

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/products/:id" component={ProductViewContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/staff/login" component={LoginFormContainer} />
            <ProtectedRoute exact path="/staff/products/new" component={ProductFormContainer} />
            <ProtectedRoute exact path="/staff/categories/" component={CategoriesContainer} />
        </Switch>
    </div>

);

export default App;