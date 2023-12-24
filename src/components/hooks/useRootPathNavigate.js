import { useNavigate } from "react-router-dom";
import config from "../../config/config";

function useRootPathNavigate () {

    const navigate = useNavigate();
    return (path, options) => {
        navigate(`${config.rootPath}/${path}`, options);
    };

}

export default useRootPathNavigate;