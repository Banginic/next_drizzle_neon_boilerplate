'use client'
import { useEffect, useState } from "react"
import { AdminType, UserType } from '@/models/types'

export function usePersistedUser(){
    const [ adminUser, setAdminUser ] = useState<AdminType | null>(null)
    const [ mainUser, setMainUser ] = useState<UserType | null>(null)

useEffect(() => {
const storedAdminUser = localStorage.getItem('admin-user')
const storedMainUser = localStorage.getItem('main-user')

if(storedAdminUser){
    setAdminUser(JSON.parse(storedAdminUser))
}
if(storedMainUser){
    setMainUser(JSON.parse(storedMainUser))
}
return () => {}

},[])

return { adminUser, setAdminUser, mainUser, setMainUser}
}