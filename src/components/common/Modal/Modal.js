import { Button } from '@mui/material';
import ReactDOM from 'react-dom';

function Modal({children, actionBar}) {
    return ReactDOM.createPortal (
        <div>
            <div
                className="absolute inset-0 bg-gray-300 opacity-80"
                // onClick={closeModal}
                ></div>
            <div className="absolute inset-40 p-10 bg-white items-center space-x-1.5 space-y-10 rounded h-80">
                {children}
                <Button
                // startIcon={<OpenWith />}
                variant="contained"
                color="error"
                >
                   Accept 
                </Button>
                <Button
                // startIcon={<OpenWith />}
                variant="contained"
                color="secondary"
                >
                   Reject 
                </Button>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );

}

export default Modal;