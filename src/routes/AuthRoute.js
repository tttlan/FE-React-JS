import React, { Component, Fragment } from 'react';
import { Route, Redirect } from "react-router-dom";

class AuthRoute extends Component {
    render() {
        const authenticated = localStorage.getItem('authenticated') || true;
        const { component: Component, ...props } = this.props;

        return (
            <Fragment>
                <Route {...props} render={props => authenticated ? <Component {...props} /> : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />} />
            </Fragment>
        );
    }
}

export default AuthRoute;