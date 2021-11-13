import { writable } from 'svelte/store'

export const sources = writable([])
export const drawerOpen = writable(false)