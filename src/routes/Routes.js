import React, { Component, Fragment } from 'react';
import { Route } from "react-router-dom";

import AuthRoute from './AuthRoute';

import Home from '../containers/Home.container';
import Login from '../containers/Login.container';
import Users from '../containers/Users.container';

class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <AuthRoute path="/users" component={Users} />
            </Fragment>
        );
    }
}

export default Routes;