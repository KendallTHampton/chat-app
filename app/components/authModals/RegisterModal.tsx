'use client'
import RegisterState from '@/app/stateManagement/RegisterModalHook'
import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import ModalComponent from './ModalComponent'
import LoginState from '@/app/stateManagement/LoginModalHook'


const RegisterModal = () => {

    const RegisterModalState = RegisterState()
    const LoginModalState = LoginState()

    const registerBody = (
        <>
            <div className='flex flex-col flex-1 items-center gap-4 h-full mt-10'>
                <input className='w-[80%] h-[40px] rounded-lg bg-neutral-200 text-black text-xl px-4' placeholder='Email' type='text' />
                <input className='w-[80%] h-[40px] rounded-lg bg-neutral-200 text-black text-xl px-4' placeholder='Password' type='password' />
                <input className='w-[80%] h-[40px] rounded-lg bg-neutral-200 text-black text-xl px-4' placeholder='Confirm Password' type='password' />
            </div>


            <div className='flex flex-col gap-4 mb-4 '>
                <button
                    className='w-[80%] m-auto p-2 rounded-lg bg-sky-500 text-white text-xl font-bold hover:bg-sky-800'
                >
                    Sign In
                </button>

                <button className='w-[80%] m-auto p-2 rounded-lg bg-neutral-800 text-neutral-100 text-xl font-bold flex justify-center transition hover:bg-neutral-400'>


                    <div className='flex gap-2 items-center'>
                        <FcGoogle className='inline-block' />
                        Sign In With Google
                    </div>
                </button>

            </div>
        </>
    )


    const modalFooter = (
        <div className='text-center text-md  text-neutral-800 '>
            Already have an account?
            <span
                className='hover:underline cursor-pointer font-semibold ml-1'
                onClick={() => {
                    RegisterModalState.closeModal()
                    LoginModalState.openModal()

                }}
            >Log In
            </span>

        </div>
    )


    return (
        <ModalComponent
            modalTitle='Register Now'
            onSubmit={() => console.log('submit')}
            modalBody={registerBody}
            isOpen={RegisterModalState.isOpen}
            onClose={RegisterModalState.closeModal}
            modalFooter={modalFooter}
        />
    )
}

export default RegisterModal