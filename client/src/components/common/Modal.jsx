import React from 'react'
import { useAppStore } from '~/store/useAppStore'

const Modal = () => {
    const { contentModel, setModal } = useAppStore()
    return (
        <div className='absolute w-screen h-screen z-[999] 
        bg-overlay-500 flex justify-center items-center'
            onClick={() => setModal(false, null)}
        >
            {contentModel}
        </div>
    )
}

export default Modal