"use client";
import Navbar from '@/components/Navbar'
import { NAVBAR_HEIGHT } from '@/lib/constants'
import { useGetAuthUserQuery } from '@/state/api'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
    const {data:authUser,isLoading:authLoading} = useGetAuthUserQuery();
     const router = useRouter()
      const pathname = usePathname()
      const [isLoading,setIsLoading] = useState(true);
   
      useEffect(()=>{
       if(authUser)
       {
         const userRole = authUser.userRole?.toLowerCase();
         if(userRole == "manager" && pathname.startsWith("/search")||(userRole == "manager" && pathname.startsWith("/")))
         {
           router.push(
             userRole === "manager"?"/managers/properties":"/tenants/favorites",
             {scroll:false}
           )
         }else
         {
           setIsLoading(false)
         }
       }
      },[authUser,router,pathname])
      if(authLoading || isLoading) return <>Loading...</>
     if(!authUser?.userRole) return null
  return (
    
       <div className='h-full w-full'>
        <Navbar/> 
          navbar
          <main className={`h-full flex w-full flex-col `} style={{paddingTop:`${NAVBAR_HEIGHT}`}}>
            {children}
          </main>
       </div>
   
  )
}

export default Layout
