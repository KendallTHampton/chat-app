'use client'
import LoginState from '@/app/stateManagement/LoginModalHook'
import RegisterState from '@/app/stateManagement/RegisterModalHook'
import SidebarState from '@/app/stateManagement/SidebarHook'
import React from 'react'
import {AiOutlineMenuFold} from 'react-icons/ai'


const Sidebar = () => {
    const sidebarState = SidebarState()
    const loginModalState = LoginState()
    const RegisterModalState = RegisterState()

    return (
        <div className={`fixed transition-transform duration-300 ease-in-out py-4 z-20 top-0 ${sidebarState.isOpen ? 'translate-x-0' : '-translate-x-full'} h-full sm:h-screen w-[65vw] sm:w-[20vw] md:w-[30vw] bg-[#0d0d0d] shadow-xl shadow-[#131212]`}>
            {/* HEADER */}
            <div className='flex flex-col p-2 border-b border-b-[#686868]'>
                <div className='flex items-center justify-center flex-row gap-2'>
                    <h1 className='flex-1 text-center text-2xl text-sky-200 font-bold '>Settings</h1>
                    <AiOutlineMenuFold
                        className=' text-sky-200 text-2xl cursor-pointer'
                        onClick={() => sidebarState.closeSidebar()}
                    />
                </div>
            </div>
            {/* Sign In */}
            <div className='flex flex-col p-2 text-white'>
                <div className='flex flex-row justify-between items-center'>
                    <p className='flex-1 text-sm sm:text-md md:text-lg text-center'>You Are Not Logged In</p>
                    <button
                        className='bg-sky-500 text-white rounded-lg p-2
                        hover:bg-sky-700 transition-colors duration-300 ease-in-out
                        '
                        onClick={() => {
                            loginModalState.openModal()
                            sidebarState.closeSidebar()
                        }
                        }
                    >Sign In
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Sidebar