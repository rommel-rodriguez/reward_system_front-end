import React from "react";
import { useContext } from "react";
import IdentityContext from "../../context/identity";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
    const {identity} = useContext(IdentityContext);
    const navigate = useNavigate();
    console.log("Inside Private Route logic");
    if (Object.keys(identity).length === 0){
        console.log("Identity is NOT Set!!!", identity);
        return <Navigate to="/signin"/> ;
    }

    console.log("Identity is Set!!!", identity);
    return children;
}

export default PrivateRoute;