// types/dashboard.ts
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    isActive: boolean;
    createdAt: string;
  }
  
  export interface Service {
    id: string;
    name: string;
    isActive: boolean;
    createdAt: string;
  }
  
  export interface TherapeuticClass {
    id: string;
    name: string;
    isActive: boolean;
    createdAt: string;
  }
  
  export interface SubClass {
    id: string;
    name: string;
    isActive: boolean;
    createdAt: string;
  }
  
  export interface StatisticsData {
    totalUsers: number;
    activeUsers: number;
    totalServices: number;
    activeServices: number;
    totalTherapeuticClasses: number;
    activeTherapeuticClasses: number;
    totalSubClasses: number;
    activeSubClasses: number;
    usersByRole: Record<string, number>;
  }
  
  export interface AdminDashboardProps {
    userId: string;
  }