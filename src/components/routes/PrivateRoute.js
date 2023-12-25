import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import RootPathNavigate from "./RootPathNavigate";
// import useRootPathNavigate from "../hooks/useRootPathNavigate";

function PrivateRoute({children}) {
    // const {identity} = useContext(IdentityContext);
    const user = useSelector((state) => state.identity.user);
    // const navigate = useRootPathNavigate();

    console.log("Inside Private Route logic");
    if ( (!user) || Object.keys(user).length === 0 ) {
        console.log("Identity is NOT Set!!!", user);
        // return <Navigate to="/signin"/> ;
        return <Navigate to="/signin"/> ;
    }

    console.log("Identity is Set!!!", user);
    return children;
}

export default PrivateRoute;