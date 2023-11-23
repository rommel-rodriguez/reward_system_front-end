import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
    // const {identity} = useContext(IdentityContext);
    const user = useSelector((state) => state.identity.user);
    console.log("Inside Private Route logic");
    if ( user && Object.keys(user).length === 0 ) {
        console.log("Identity is NOT Set!!!", user);
        return <Navigate to="/signin"/> ;
    }

    console.log("Identity is Set!!!", user);
    return children;
}

export default PrivateRoute;