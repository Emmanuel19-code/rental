"use client"
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useGetAuthUserQuery } from "@/state/api";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const {data:authUser,isLoading:authLoading} = useGetAuthUserQuery();
  const router = useRouter()
   const pathname = usePathname()
   const [isLoading,setIsLoading] = useState(true);

   useEffect(()=>{
    if(authUser)
    {
      const userRole = authUser.userRole?.toLowerCase();
      if(userRole == "manager" && pathname.startsWith("/tenants")||(userRole == "tenant" && pathname.startsWith("/managers")))
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
    <SidebarProvider>
      <div className="min-h-screen bg-primary-100 w-full">
        <Navbar />
        <div>
          <main className="flex">
           <AppSidebar userType={authUser?.userRole.toLowerCase()}/>
            <div className="flex-grow transition-all duration-300"></div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;