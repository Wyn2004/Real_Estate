import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'

const Navigation = () => {
    return (
        <div className='w-full bg-transparent top-[85px] fixed z-50 px-[100px] flex items-center justify-between'>
            <Link to={'/'}>
                <img src='/logo1.png' alt='Logo' className='w-[170px] object-contain'/>
            </Link>
            <div>
                <Button className='bg-transparent border border-white'>
                    Add Listing
                </Button>
            </div>
        </div>
    )
}

export default Navigation