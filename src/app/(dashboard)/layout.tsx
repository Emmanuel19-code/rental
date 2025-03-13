import Navbar from "@/components/Navbar";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-primary-100 w-full">
        <Navbar />
        <div>
          <main className="flex">
            <Sidebar />
            <div className="flex-grow transition-all duration-300"></div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
