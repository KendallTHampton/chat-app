'use client'
import React, {useState} from 'react'
import {FcGoogle} from 'react-icons/fc'
import ModalComponent from './ModalComponent'
import LoginState from '@/app/stateManagement/LoginModalHook'
import RegisterState from '@/app/stateManagement/RegisterModalHook'
import {signIn} from "next-auth/react";
import Email from 'next-auth/providers/email'
import Button from '../Button'


const LoginModal = () => {

    const LoginModalState = LoginState()
    const RegisterModalState = RegisterState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const handleSignIn = async () => {
    //     const result = await signIn('credentials', {
    //         redirect: false,
    //         email: email.trim(),
    //         password: password.trim(),
    //     })

    //     if (!result?.error) {
    //         LoginModalState.closeModal()
    //     }
    //     else {
    //         console.log(result)
    //     }
    // }

    const loginBody = (
        <>
            <div className='flex flex-col flex-1 px-6 items-center gap-3 h-full mt-5'>
                <input
                    className='sm:w-[90%] w-[100%] h-[40px] rounded-lg bg-neutral-700 text-white text-xl px-4'
                    placeholder='Email' type='text'
                    onChange={e => setEmail(e.target.value)}
                />
                <input className='sm:w-[90%] w-[100%] h-[40px] rounded-lg bg-neutral-700 text-white text-xl px-4' placeholder='Password' type='password'
                    onChange={e => setPassword(e.target.value)}
                />
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
            modalBody={loginBody}
            isOpen={LoginModalState.isOpen}
            onClose={LoginModalState.closeModal}
            modalFooter={modalFooter}
            onSubmit={() => console.log('hello')}
        />
    )
}

export default LoginModal