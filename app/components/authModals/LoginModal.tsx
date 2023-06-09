'use client'
import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import ModalComponent from './ModalComponent'
import LoginState from '@/app/stateManagement/LoginModalHook'
import RegisterState from '@/app/stateManagement/RegisterModalHook'


const LoginModal = () => {

    const LoginModalState = LoginState()
    const RegisterModalState = RegisterState()

    const loginBody = (
        <>
            <div className='flex flex-col flex-1 px-6 items-center gap-3 h-full mt-5'>
                <input className='sm:w-[90%] w-[100%] h-[40px] rounded-lg bg-neutral-700 text-white text-xl px-4' placeholder='Email' type='text' />
                <input className='sm:w-[90%] w-[100%] h-[40px] rounded-lg bg-neutral-700 text-white text-xl px-4' placeholder='Password' type='password' />
            </div>


            <div className='flex flex-col gap-3 mb-4 px-6 '>
                <button
                    className='sm:w-[90%] w-[100%] m-auto p-2 rounded-lg bg-sky-500 text-white text-xl font-bold hover:bg-sky-800'
                >
                    Sign In
                </button>

                <button className='sm:w-[90%] w-[100%] m-auto p-2 rounded-lg bg-neutral-100 text-neutral-800 text-xl font-bold flex justify-center transition hover:bg-neutral-400'>


                    <div className='flex gap-4 items-center'>
                        <FcGoogle className='inline-block' />
                        Sign In With Google
                    </div>
                </button>

            </div>
        </>
    )

    const modalFooter = (
        <div className='text-center text-md font text-neutral-200 mb-6'>
            Dont have an account?
            <span
                className='hover:underline cursor-pointer font-semibold ml-1'
                onClick={() => {
                    LoginModalState.closeModal()
                    RegisterModalState.openModal()
                }}
            >Sign Up
            </span>

        </div>
    )

    return (
        <ModalComponent
            modalTitle='Sign In'
            onSubmit={() => console.log('submit')}
            modalBody={loginBody}
            isOpen={LoginModalState.isOpen}
            onClose={LoginModalState.closeModal}
            modalFooter={modalFooter}
        />
    )
}

export default LoginModal