import { create } from 'zustand'

export const useAppStore = create((set) => ({
    isShowModel: false,
    contentModel: null,
    setModal: (isShowModel, contentModel) => 
        set(() => ({
            isShowModel,
            contentModel
        }))
}))
