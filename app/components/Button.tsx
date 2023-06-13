'use client'
import React from 'react'
import {IconType} from 'react-icons'

interface Props {
    label: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean
    icon?: IconType
    secondaryButton?: boolean
}

const Button = ({label, onClick, disabled, icon: Icon, secondaryButton}: Props) => {
    return (
        <button
            className={`relative sm:w-[90%] w-[100%] m-auto p-2 rounded-lg 
            ${secondaryButton ? 'bg-neutral-200 text-neutral-800 hover:bg-neutral-500 ' : 'bg-sky-500 text-white hover:bg-sky-800 '} 
            font-bold sm:w-[90%] w-[100%] text-xl
            `
            }
        >
            {Icon && <Icon size={24} className='absolute left-4 top-3' />}
            {label}
        </button>
    )
}

export default Button