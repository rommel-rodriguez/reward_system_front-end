import { useState, Fragment } from "react"
import { Button } from "@mui/material";
import { OpenWith } from "@mui/icons-material"; 
import Modal from "../../common/Modal/Modal";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    return (
        <Fragment>
            <Button startIcon={<OpenWith />} onClick={handleClick}>

            </Button>
            {
                showModal &&
                    <Modal />
            }

        </Fragment>
    );

}

export default ModalPage;