import { useState, Fragment } from "react"
import { Button } from "@mui/material";
import { OpenWith } from "@mui/icons-material"; 
import Modal from "../../common/Modal/Modal";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Fragment>
            <Button
             startIcon={<OpenWith />}
             onClick={handleClick}
             variant="contained"
             color="warning"
             >
                Open Modal
            </Button>
            {
                showModal &&
                    <Modal closeModal={handleCloseModal} />
            }

        </Fragment>
    );

}

export default ModalPage;