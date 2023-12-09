import { Button } from '@mui/material';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({children, closeModal, actionBar}) {
    useEffect(
        () => {
            document.body.classList.add('overflow-hidden');
            return (
                () => {
                    document.body.classList.remove('overflow-hidden');
                }
            );
        },
        []
    );

    return ReactDOM.createPortal (
        <div>
            <div
                className="fixed inset-0 bg-gray-300 opacity-80"
                onClick={closeModal}
                ></div>
            <div className="fixed inset-x-10 inset-y-24 md:inset-40 p-10 bg-slate-400 text-white shadow-xl rounded-3xl h-80">
                <div className='flex flex-col justify-between h-full'>
                    {children}
                    <div className='flex justify-end'>
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );

}

export default Modal;