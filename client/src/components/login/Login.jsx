import clsx from 'clsx'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputForm } from '..'


// chặn sự kiện nổi bọt vì click vào thằng cha là Modal thì sẽ tắt
// hàm dưới sẽ chặn sự kiện tắt khi click vào login
// onClick={e => e.stopPropagation()}

const Login = () => {
    const [variant, setVariant] = useState("LOGIN")
    // Lấy prop register của useForm,  
    // Dùng để liên kết các trường nhập liệu(input, select, textarea) với 
    // react - hook - form và thêm các quy tắc xác thực(validation).
    const { register } = useForm()
    return (
        <div className='bg-main-50 rounded-md p-4 w-[500px] flex items-center flex-col gap-4'
            onClick={e => e.stopPropagation()}
        >
            <h1 className='font-PT_Serif text-3xl font-semibold tracking-tight'>
                Welcome to Rest09
            </h1>
            <div className='flex w-full justify-start gap-4 border-b text-[16px] cursor-pointer'>
                <span className={clsx(variant === "LOGIN" && "border-b-4 border-main-500")}
                    onClick={() => setVariant("LOGIN")}
                >
                    Login
                </span>
                <span
                    className={clsx(variant === "REGISTER" && "border-b-4 border-main-500")}
                    onClick={() => setVariant("REGISTER")}
                >
                    New Account
                </span>
            </div>
            <div className='flex flex-col gap-4 w-full px-1'>
                <InputForm
                    label='Phone number:'
                    register={register}
                    id='phone'
                    inputClassName='rounded-md'
                />
            </div>

        </div>
    )
}

export default Login
