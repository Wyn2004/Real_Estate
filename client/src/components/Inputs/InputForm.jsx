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
    errors = {},
    containerClassName,
    placeholder
}) => {
    return (
        <div className={twMerge(clsx('flex flex-col gap-2 w-full'))}>
            {label && <label className='font-semibold' htmlFor={id}>{label}</label>}
            <input
                type={type}
                id={id}
                className={twMerge(clsx( 'placeholder:text-sm', inputClassName))}
                {...register(id, validate)}
                placeholder={placeholder}
            />
            {
                errors[id] &&
                <small className='text-xs text-red-500'>
                    {errors[id].message}
                </small>
            }
        </div>
    )
}

export default InputForm