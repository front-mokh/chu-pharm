"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();
  
  const handleLogout = async () => {
    try {
      // Clear any client-side storage/cache
      if (typeof window !== 'undefined') {
        // Clear localStorage and sessionStorage
        localStorage.clear();
        sessionStorage.clear();
      }
      
      // Sign out with proper redirect
      await signOut({ 
        callbackUrl: "/auth/signin",
        redirect: true 
      });
      
      // Force router refresh to clear any cached data
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
      // Fallback: force redirect to login
      window.location.href = "/auth/signin";
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLogout}
      className="flex items-center gap-2"
    >
      <LogOut className="h-4 w-4" />
      Logout
    </Button>
  );
}