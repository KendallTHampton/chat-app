'use client'
import LoginState from "@/app/stateManagement/LoginModalHook"
import SidebarState from "@/app/stateManagement/SidebarHook"
import {MdOutlineMenu} from 'react-icons/md'

const user = false
const Navbar = () => {

    const loginModalState = LoginState()
    const sidebarState = SidebarState()

    return (
        <div className='fixed py-4 w-full top-0 flex justify-between items-center bg-neutral-900 px-6 shadow-lg shadow-[#22222210] gap-4'>

            <MdOutlineMenu

                onClick={() => {
                    if (sidebarState.isOpen) {
                        sidebarState.closeSidebar()
                    }
                    else {
                        sidebarState.openSidebar()
                    }

                }} className='text-sky-200 text-2xl cursor-pointer' />
            <h1 className='text-sky-200 text-4xl font-bold'>Chat Bot</h1>

            {/* empty div */}
            <div></div>


        </div >
    )
}

export default Navbar