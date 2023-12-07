import { ReactDOM } from "react";

function Modal() {
    return ReactDOM.createPortal (
        <div>
            <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
            <div className="absolute inset-40 p-10 bg-white"></div>
            <h2>Hello Modal</h2>
        </div>,
        document.querySelector('')
    );

}

export default Modal;