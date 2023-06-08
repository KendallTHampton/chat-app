'use client'
import LoginState from "@/app/stateManagement/LoginModalHook"

const user = false
const Navbar = () => {

    const loginModalState = LoginState()

    return (
        <div className='fixed w-full h-[60px] top-0 flex justify-between items-center bg-neutral-900 px-60  shadow-lg shadow-[#c6c6c610] sha'>

            <h1 className='text-sky-200 text-4xl font-bold mt-2'>Chat Bot</h1>

            {user ? (<></>) :
                (
                    <div className='flex gap-4 border p-2 bg-slate-200 cursor-pointer'
                        onClick={() => loginModalState.openModal()}
                    >
                        Sign In
                    </div>
                )

            }
        </div >
    )
}

export default Navbar