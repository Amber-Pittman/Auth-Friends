import React from "react";
import { Route, Redirect, Router } from "react-router-dom";

export default function PrivateRoute(props) {
    const { // Destructure from props here
        component: Component,
        ...rest
    } = props

    return (
        <Route {...rest} render={(renderProps) => {
            if (localStorage.getItem("token")) {
                return Component {...renderProps} />
            } else {
                return <Redirect to="/login" />
            }
        }}
    )

}