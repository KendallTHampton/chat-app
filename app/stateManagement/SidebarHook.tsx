import {create} from 'zustand'

type State = {
    isOpen: boolean
}

type Actions = {
    openSidebar: () => void
    closeSidebar: () => void
}

const SidebarState = create<State & Actions>((set) => ({
    isOpen: false,
    openSidebar: () => set({isOpen: true}),
    closeSidebar: () => set({isOpen: false}),
}))


export default SidebarState