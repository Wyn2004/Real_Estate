import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({children, className, onclick, type = 'button'}) => {
    return (
        <button
            type={type}
            onClick={onclick}
            className={twMerge(
                clsx('py-3 px-4 text-white bg-main-700 rounded-lg', className)
            )}
        >
            {children}
        </button>
    )
}

export default Button