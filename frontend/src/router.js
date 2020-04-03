import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

import auth from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} 
        render={props => 
        auth() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    } />
)


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/register' component={Register} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
        </Switch>
    </BrowserRouter>
);
 
export default Router;