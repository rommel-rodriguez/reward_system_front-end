import { Navigate } from "react-router-dom";
import config from "../../config/config";


function RootPathNavigate({to, ...rest}) {
    const path = `${config.rootPath}${to}`;
    console.log("Moving to:", path);
    return (
        <Navigate to={path} {...rest} />
    );
}

export default RootPathNavigate;