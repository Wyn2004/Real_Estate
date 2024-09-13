import React from 'react'

const home = () => {
    return (
        <div className='w-full bg-white'>
            <div className='h-fit w-full relative'>
                <img src='/banner.png' alt='banner' />
                <div className='absolute inset-0 flex justify-center items-center flex-col text-main-50 gap-4 pt-20'>
                    <h1 className='text-5xl'>
                        Find Your Dream Home
                    </h1>
                    <span className='flex flex-col justify-center items-center text-xl'>
                        <span>
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                        </span>
                        <span>
                            cubilia curae; Proin sodales ultrices nulla blandit volutpat.
                        </span>
                    </span>
                </div>
            </div>
            <div className='w-main mx-auto'>
                content
            </div>
        </div>
    )
}

export default home