import React from 'react'
import { Route, Navigate } from 'react-router-dom'


export const PrivateRoute = ({
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('loggedIn') === 'true') {
                    return <Component {...props} />;
                } else {
                    return (
                        <Navigate
                            to={{
                                pathname: "./Login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    )
                }
            }}
        />
    )
}

export default PrivateRoute