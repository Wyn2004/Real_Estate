import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../common/Button'
import navigations from '~/utils/constain'
import clsx from 'clsx'
import withRouter from '~/hocs/withRouter'
import { twMerge } from 'tailwind-merge'
import { useUserStore } from '~/store/useUserStore'
import { useAppStore } from '~/store/useAppStore'
import { Login } from '..'

const Navigation = ({ location }) => {
    const { token } = useUserStore()
    const { setModal } = useAppStore()
    return ( 
        <div className={twMerge(clsx('w-full bg-transparent top-[85px] fixed z-50 px-[100px] flex items-center justify-between', 
            location.pathname !=='/' && 'bg-white'
        ))}>
            <Link to={'/'}>
                <img src={clsx(location.pathname === '/' ? '/logo1.png' : '/logo2.png')} alt='Logo' className='w-[170px] object-contain' />
            </Link>
            <div className={clsx('flex items-center gap-6 text-md', location.pathname === '/' ? 'text-main-50' : 'text-main-700')}>
                {navigations.map((el) => (
                    <NavLink
                        key={el.id}
                        to={el.path}
                        className={({ isActive }) => clsx(isActive && 'font-bold text-lg')}
                    >
                        {el.text}
                    </NavLink>
                ))}
                {
                    token ?
                        <Button className={clsx(location.pathname === '/' ? 'bg-transparent border border-white' : 'bg-main-600 text-main-50')}>
                            Add Listing
                        </Button>
                        :
                        <Button className={clsx(location.pathname === '/' ? 'bg-transparent border border-white' : 'bg-main-600 text-main-50')}
                            onclick={() => setModal(true, <Login />)}
                        >
                            Sign in
                        </Button>
                }
            </div>
        </div>
    )
}

export default withRouter(Navigation)