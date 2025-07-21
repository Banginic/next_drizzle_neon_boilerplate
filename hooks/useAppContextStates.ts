'use client'
import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { usePersistedUser } from "./usePersistedUser"
import { useScrollNavbar } from "./useScrollNavbar"


export function useAppContextState(){
    const router = useRouter()
    const [ theme, setTheme ] = useState<'light' | 'dark'>('light')
    const [ lang, setLang ] = useState<'EN' | 'FR' >('EN');

    const [ mainSidebar, setMainSidebar ] = useState(false)
    const [ adminSidebar, setAdminSidebar ] = useState(false);

    function removeAllDisplay(){
       if (mainSidebar) setMainSidebar(false);
    }
    const { showMainNavbar } = useScrollNavbar(removeAllDisplay)
    const { adminUser, setAdminUser, mainUser, setMainUser } = usePersistedUser()

    return useMemo(() =>({
        theme, setTheme,
        lang, setLang,
        mainSidebar, setMainSidebar,
        adminSidebar, setAdminSidebar,
        showMainNavbar, router,
        adminUser, setAdminUser, mainUser, setMainUser
    }),[theme, setTheme,
        lang, setLang,
        mainSidebar, setMainSidebar,
        adminSidebar, setAdminSidebar,
        showMainNavbar, router,
        adminUser, setAdminUser, mainUser, setMainUser])
}