import { writable, type Writable } from "svelte/store"

export type Theme =  "light" | "dark"

// const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
export const theme: Writable<Theme> = writable("dark")//prefersDarkMode.matches ? 'dark' : 'light')

