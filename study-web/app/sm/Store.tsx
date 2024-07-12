import {create} from "zustand";


export type IdiomState = {
    hideIndex: number,
    setHideIndex: () => {},
    clearHideIndex: () => {},
}
export const useIdiomsStore = create((set) => ({
    hideIndex: 0,
    setHideIndex: () => set((state: IdiomState) => ({hideIndex: state.hideIndex})),
    clearHideIndex: () => set({hideIndex: -1}),
}))


