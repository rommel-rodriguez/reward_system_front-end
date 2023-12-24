import { Link } from "react-router-dom";
import config from "../../config/config";

function RootPathLink({to, ...props}) {
    const path = `${config.rootPath}/${to}`;
    return <Link to={path} {...props} />;
}

export default RootPathLink;

