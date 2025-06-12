// src/app/(authenticated)/layout.tsx
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
  } from "@/components/ui/sidebar";
  import { Toaster } from "sonner";
  import { AppSidebar } from "@/components/app-sidebar";
  import { auth } from "../../../auth";
  import { getUserRole } from "../../../prisma/db";
  import { LogoutButton } from "@/components/LogoutButton";
  import { redirect } from "next/navigation";
  
  export default async function AuthenticatedLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const session = await auth();
    
    // Redirect to login if not authenticated
    if (!session) {
      redirect("/auth/signin");
    }
  
    const role = await getUserRole(session.user?.id as string);
  
    return (
      <SidebarProvider>
        <AppSidebar role={role} />
        <SidebarInset>
          <header className="flex h-14 shrink-0 items-center gap-2 bg-white border-b">
            <div className="flex flex-1 justify-between items-center gap-2 px-3">
              <SidebarTrigger />
              {session && <LogoutButton />}
            
            </div>
          </header>
          <div className="p-6 h-full bg-[#EEF2F6]">{children}</div>
          <Toaster />
        </SidebarInset>
      </SidebarProvider>
    );
  }