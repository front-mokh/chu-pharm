import React from 'react';
import { 
  Users, 
  Building2, 
  Pill, 
  FileText,
  CheckCircle,
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
}

interface StatisticsCardsProps {
  stats: StatisticsData;
}

const StatisticsCards: React.FC<StatisticsCardsProps> = ({ stats }) => {
  const cardData = [
    {
      title: 'Utilisateurs',
      total: stats.totalUsers,
      active: stats.activeUsers,
      icon: Users,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Services',
      total: stats.totalServices,
      active: stats.activeServices,
      icon: Building2,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      title: 'Classes Thérapeutiques',
      total: stats.totalTherapeuticClasses,
      active: stats.activeTherapeuticClasses,
      icon: Pill,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Sous-Classes',
      total: stats.totalSubClasses,
      active: stats.activeSubClasses,
      icon: FileText,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{card.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{card.total}</p>
              </div>
              <div className={`${card.iconBg} p-3 rounded-lg`}>
                <IconComponent className={`w-6 h-6 ${card.iconColor}`} />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-gray-500">{card.active} actifs</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatisticsCards;