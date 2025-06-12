import React from 'react';
import { 
  Users, 
  Building2,
} from 'lucide-react';
// import AddServiceDialog from '../services/AddServiceDialog'; 
// import AddUserDialog from '../users/AddUserDialog';
import ViewAction from '@/components/custom/ViewAction';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}

interface Service {
  id: string;
  name: string;
  isActive: boolean;
  createdAt: string;
}

interface RecentDataSectionProps {
  users: User[];
  services: Service[];
}

const RecentDataSection: React.FC<RecentDataSectionProps> = ({ users, services }) => {
  const getRoleText = (role: string): string => {
    const roleTexts: Record<string, string> = {
      ADMIN: 'Administrateur',
      PHARMACIST: 'Pharmacien',
      SERVICE_COORDINATOR: 'Coordinateur',
      ORDER_PREPARER: 'Préparateur'
    };
    return roleTexts[role] || role;
  };

  const getRoleColor = (role: string): string => {
    const colors: Record<string, string> = {
      ADMIN: 'bg-red-100 text-red-800',
      PHARMACIST: 'bg-blue-100 text-blue-800',
      SERVICE_COORDINATOR: 'bg-green-100 text-green-800',
      ORDER_PREPARER: 'bg-orange-100 text-orange-800'
    };
    return colors[role] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Recent Users */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Utilisateurs Récents</h2>
            {/* <AddUserDialog services={services} /> */}
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {users.slice(0, 5).map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{user.firstName} {user.lastName}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                    {getRoleText(user.role)}
                  </span>
                  <ViewAction href={`/admin/users/${user.id}`} />
                </div>
              </div>
            ))}
          </div>
          {users.length === 0 && (
            <div className="text-center py-8">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Aucun utilisateur trouvé</p>
            </div>
          )}
        </div>
      </div>

      {/* Recent Services */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Services Récents</h2>
            {/* <AddServiceDialog /> */}
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {services.slice(0, 5).map((service) => (
              <div key={service.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{service.name}</p>
                    <p className="text-sm text-gray-500">{formatDate(service.createdAt)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    service.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {service.isActive ? 'Actif' : 'Inactif'}
                  </span>
                  <ViewAction href={`/admin/services/${service.id}`} />
                </div>
              </div>
            ))}
          </div>
          {services.length === 0 && (
            <div className="text-center py-8">
              <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Aucun service trouvé</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentDataSection;