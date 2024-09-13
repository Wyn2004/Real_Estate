import React from 'react'
import icons from '../../utils/icon'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import withRouter from '~/hocs/withRouter'

// z-index để nổi lên
const Topheader = ({location}) => {
    const { HiOutlineMailOpen, FiPhone, FaFacebookF, FaInstagram, FaBehance, IoLogoYoutube } = icons
    return (
        <div className={twMerge(
            clsx('w-full text-white h-[85px] bg-transparent fixed z-50 top-0 px-[100px] py-[26px] flex justify-between items-center border-b border-main-200',
                location.pathname !=='/' && 'bg-main-700'
            )
        )}>
            <span className='flex items-center gap-2'>
                <span>
                    <HiOutlineMailOpen className='text-lg'/>
                </span>
                <span>
                    <span className=''>
                        Email us at : 
                    </span>
                    <span className='text-gray-300'>
                        example@mail.com
                    </span>
                </span>
            </span>
            <div className='flex items-center gap-6'>
                <div className=' flex items-center gap-6'>
                    <FaFacebookF size={18}/>
                    <FaInstagram size={20}/>
                    <FaBehance size={20}/>
                    <IoLogoYoutube size={20}/>
                </div>
                <div className='flex items-center pl-8 border-l border-main-200'>
                    <span className='flex items-center gap-2'>
                        <FiPhone className='text-lg'/>
                        <span className='text-gray-300'>
                            123-4567 890
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Topheader)
