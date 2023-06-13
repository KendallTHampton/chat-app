'use client'
import RegisterState from '@/app/stateManagement/RegisterModalHook'
import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import ModalComponent from './ModalComponent'
import LoginState from '@/app/stateManagement/LoginModalHook'
import Button from '../Button'


const RegisterModal = () => {

    const RegisterModalState = RegisterState()
    const LoginModalState = LoginState()

    const registerBody = (
        <>
            <div className='flex flex-col flex-1 px-6 items-center gap-3 h-full mt-5'>
                <input className='sm:w-[90%] w-[100%] h-[40px] rounded-lg bg-neutral-200 text-black text-xl px-4' placeholder='Email' type='text' />
                <input className='sm:w-[90%] w-[100%] h-[40px] rounded-lg bg-neutral-200 text-black text-xl px-4' placeholder='Password' type='password' />
                <input className='sm:w-[90%] w-[100%] h-[40px] rounded-lg bg-neutral-200 text-black text-xl px-4' placeholder='Confirm Password' type='password' />
            </div>


            <div className='flex flex-col gap-3 mb-4 px-6 '>
                <Button
                    label="Sign In"
                    secondaryButton={false}
                    onClick={() => console.log('hello')}
                    disabled={false}
                />

                <Button
                    label='Sign In With Google'
                    onClick={() => console.log('Sign In')}
                    icon={FcGoogle}
                    secondaryButton={true}
                />

            </div>
        </>
    )


    const modalFooter = (
        <div className='text-center text-md  text-neutral-800 mb-6 '>
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