import React from 'react';
import { 
  Users, 
  Building2, 
  Pill,
  Activity,
  TrendingUp,
} from 'lucide-react';

interface StatisticsData {
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

interface DashboardInsightsProps {
  stats: StatisticsData;
}

const DashboardInsights: React.FC<DashboardInsightsProps> = ({ stats }) => {
  const getRoleText = (role: string): string => {
    const roleTexts: Record<string, string> = {
      ADMIN: 'Administrateur',
      PHARMACIST: 'Pharmacien',
      SERVICE_COORDINATOR: 'Coordinateur',
      ORDER_PREPARER: 'Préparateur'
    };
    return roleTexts[role] || role;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
      {/* System Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">État du Système</h3>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Services Actifs</span>
            <span className="font-semibold text-green-600">{stats.activeServices}/{stats.totalServices}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Utilisateurs Actifs</span>
            <span className="font-semibold text-green-600">{stats.activeUsers}/{stats.totalUsers}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Classes Actives</span>
            <span className="font-semibold text-green-600">{stats.activeTherapeuticClasses}/{stats.totalTherapeuticClasses}</span>
          </div>
        </div>
      </div>

      {/* User Role Distribution */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Répartition des Rôles</h3>
          <Activity className="w-5 h-5 text-gray-400" />
        </div>
        <div className="space-y-3">
          {Object.entries(stats.usersByRole).map(([role, count]) => (
            <div key={role} className="flex justify-between items-center">
              <span className="text-gray-600">{getRoleText(role)}</span>
              <span className="font-semibold text-gray-900">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Actions Rapides</h3>
          <TrendingUp className="w-5 h-5 text-gray-400" />
        </div>
        <div className="space-y-3">
          <a 
            href="/admin/users" 
            className="flex items-center justify-between p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <span className="text-sm font-medium">Gérer les utilisateurs</span>
            <Users className="w-4 h-4" />
          </a>
          <a 
            href="/admin/services" 
            className="flex items-center justify-between p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
          >
            <span className="text-sm font-medium">Gérer les services</span>
            <Building2 className="w-4 h-4" />
          </a>
          <a 
            href="/admin/therapeutic-classes" 
            className="flex items-center justify-between p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          >
            <span className="text-sm font-medium">Classes thérapeutiques</span>
            <Pill className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardInsights;