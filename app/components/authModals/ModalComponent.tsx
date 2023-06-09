'use client'

import LoginState from "@/app/stateManagement/LoginModalHook";
import RegisterState from "@/app/stateManagement/RegisterModalHook";
import {useCallback, useEffect, useState} from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    modalTitle: string;
    modalBody: JSX.Element;
    modalFooter?: JSX.Element;
    disabled?: boolean;
}

const ModalComponent = ({isOpen, onClose, onSubmit, modalTitle, modalBody, disabled, modalFooter}: ModalProps) => {

    const LoginModalState = LoginState()
    const RegisterModalState = RegisterState()

    const [showModal, setShowModal] = useState(isOpen)
    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleModalClose = useCallback(() => {
        if (disabled) return;
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose, disabled]);

    const handleSubmit = useCallback(() => {
        if (!disabled) {
            onSubmit();
        }
    }, [disabled, onSubmit]);

    if (!isOpen) return null;

    return (
        <div className='fixed w-full h-[100vh] bg-[#53576094] top-0 z-10 '>
            {/* MODAL */}
            <div className={`relative top-32 md:top-40 w-[90vw] md:w-[40vw] h-[450px] rounded-lg flex gap-6 flex-col m-auto shadow-xl shadow-[#0d0d0d] translate duration-300
            ${showModal ? "translate-y-0" : "translate-y-full"} 
            ${showModal ? "opacity-100" : "opacity-0"} 
            ${LoginModalState.isOpen ? "bg-neutral-900" : "bg-white"}`}
            >
                {/* Header */}
                <div className={`flex justify-between items-center p-2 border-b border-b-[#686868]   
                ${LoginModalState.isOpen ? 'text-white' : "text-neutral-500"}`}>
                    <button
                        className=' text-xl font-bold'
                        onClick={handleModalClose}
                    >
                        X
                    </button>
                    <h1 className={`text-2xl font-bold
                   
                    `}>
                        {modalTitle}
                    </h1>
                    {/* invisible element */}
                    <div className='text-xl font-bold'>&nbsp;</div>
                </div>
                {/* Body / Inputs */}
                {modalBody}
                {/* Footer */}
                {modalFooter}
            </div>

        </div>
    )
}

export default ModalComponent