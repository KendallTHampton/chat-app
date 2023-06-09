'use client'
import LoginState from "@/app/stateManagement/LoginModalHook"

const user = false
const Navbar = () => {

    const loginModalState = LoginState()

    return (
        <div className='fixed py-2 w-full top-0 flex justify-center items-center bg-neutral-900 px-6 shadow-lg shadow-[#22222210] gap-4'>

            <h1 className='text-sky-200 text-4xl font-bold mt-2'>Chat Bot</h1>

            {user ? (<></>) :
                (
                    <div className='flex gap-4 border rounded-lg p-2 bg-slate-200 cursor-pointer'
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