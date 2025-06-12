"use client";
import React, { useState, useEffect } from 'react';
import { 
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { 
  getAllUsers,
  getAllServices, 
  getAllTherapeuticClasses,
  getAllSubClasses
} from '../../../../lib/services';

// Import our extracted components
import StatisticsCards from './StatisticsCards';
import RecentDataSection from './RecentDataSection';
import DashboardInsights from './DashboardInsights';

// Import types
import type { 
  User, 
  Service, 
  TherapeuticClass, 
  SubClass, 
  StatisticsData,
  AdminDashboardProps 
} from '../../..//types/dashboard';

const AdminDashboard: React.FC<AdminDashboardProps> = ({ userId }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [therapeuticClasses, setTherapeuticClasses] = useState<TherapeuticClass[]>([]);
  const [subClasses, setSubClasses] = useState<SubClass[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load all data on component mount
  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      const [usersData, servicesData, therapeuticClassesData, subClassesData] = await Promise.all([
        getAllUsers(),
        getAllServices(),
        getAllTherapeuticClasses(),
        getAllSubClasses()
      ]);

      setUsers(usersData || []);
      setServices(servicesData || []);
      setTherapeuticClasses(therapeuticClassesData || []);
      setSubClasses(subClassesData || []);
    } catch (err) {
      console.error('Error loading dashboard data:', err);
      setError('Erreur lors du chargement des données');
    } finally {
      setLoading(false);
    }
  };

  // Calculate statistics
  const stats: StatisticsData = React.useMemo(() => {
    const totalUsers = users.length;
    const activeUsers = users.filter(user => user.isActive).length;
    const totalServices = services.length;
    const activeServices = services.filter(service => service.isActive).length;
    const totalTherapeuticClasses = therapeuticClasses.length;
    const activeTherapeuticClasses = therapeuticClasses.filter(tc => tc.isActive).length;
    const totalSubClasses = subClasses.length;
    const activeSubClasses = subClasses.filter(sc => sc.isActive).length;

    // Users by role
    const usersByRole = users.reduce<Record<string, number>>((acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {});

    return {
      totalUsers,
      activeUsers,
      totalServices,
      activeServices,
      totalTherapeuticClasses,
      activeTherapeuticClasses,
      totalSubClasses,
      activeSubClasses,
      usersByRole
    };
  }, [users, services, therapeuticClasses, subClasses]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Chargement du tableau de bord...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-8 h-8 text-red-600 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={loadDashboardData}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord</h1>
            <p className="text-gray-600 mt-1">Administration</p>
          </div>
        </div>

        {/* Statistics Cards */}
        <StatisticsCards stats={stats} />

        {/* Recent Data Section */}
        <RecentDataSection users={users} services={services} />

        {/* Dashboard Insights */}
        <DashboardInsights stats={stats} />
      </div>
    </div>
  );
};

export default AdminDashboard;