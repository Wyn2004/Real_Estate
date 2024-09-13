import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../common/Button'
import navigations from '~/utils/constain'
import clsx from 'clsx'

const Navigation = () => {
    return (
        <div className='w-full bg-transparent top-[85px] fixed z-50 px-[100px] flex items-center justify-between'>
            <Link to={'/'}>
                <img src='/logo1.png' alt='Logo' className='w-[170px] object-contain'/>
            </Link>
            <div className='text-main-50 flex items-center gap-6 text-md'>
                {navigations.map((el) => (
                    <NavLink
                        key={el.id}
                        to={el.path}
                        className={({ isActive }) => clsx(isActive && 'font-bold text-lg')}
                    >
                        {el.text}
                    </NavLink>
                ))}
                <Button className='bg-transparent border border-white'>
                    Add Listing
                </Button>
            </div>
        </div>
    )
}

export default Navigation