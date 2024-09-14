import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const InputForm = ({
    id,
    label,
    type = 'text',
    style = 'form-input',
    inputClassName,
    register,
    validate,
    errors,
    containerClassName
}) => {
    return (
        <div className={twMerge(clsx('flex flex-col gap-4 w-full'))}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                type={type}
                id={id}
                className={twMerge(clsx(style, inputClassName))}
                {...register(id, validate)}
            />
        </div>
    )
}

export default InputForm