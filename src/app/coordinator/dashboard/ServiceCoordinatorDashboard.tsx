"use client";
import React, { useState, useEffect } from 'react';
import { 

  Package, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Calendar,
  Users,
  FileText,
  Search,
  Filter,
  Loader2
} from 'lucide-react';
import ViewAction from '@/components/custom/ViewAction';
import UpdateAction from '@/components/custom/UpdateAction';
import AddButton from '@/components/custom/AddButton';
// Import your server actions
import { 
  getOrdersByService, 
  deleteOrder, 
  submitOrder 
} from '../orders/service'; 

const ServiceCoordinatorDashboard = ({ 
  serviceId, 

}: { 
  serviceId: string; 
  userId: string; 
}) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  // Load orders on component mount
  useEffect(() => {
    loadOrders();
  }, [serviceId]);

  const loadOrders = async () => {
    try {
      setLoading(true);
      setError(null);
      const ordersData = await getOrdersByService(serviceId);
      setOrders(ordersData || []);
    } catch (err) {
      console.error('Error loading orders:', err);
      setError('Erreur lors du chargement des commandes');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadOrders();
    setRefreshing(false);
  };

  const handleDeleteOrder = async (orderId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette commande ?')) {
      return;
    }

    try {
      const result = await deleteOrder(orderId);
      if (result.success) {
        // Remove the order from local state
        setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
      } else {
        alert(result.error || 'Erreur lors de la suppression');
      }
    } catch (err) {
      console.error('Error deleting order:', err);
      alert('Erreur lors de la suppression de la commande');
    }
  };

  const handleSubmitOrder = async (orderId: string) => {
    try {
      const result = await submitOrder(orderId);
      if (result.success) {
        // Update the order status in local state
        setOrders(prevOrders => 
          prevOrders.map(order => 
            order.id === orderId 
              ? { ...order, status: 'SUBMITTED' }
              : order
          )
        );
      } else {
        alert(result.error || 'Erreur lors de la soumission');
      }
    } catch (err) {
      console.error('Error submitting order:', err);
      alert('Erreur lors de la soumission de la commande');
    }
  };

  // Calculate statistics from orders data
  const stats = React.useMemo(() => {
    const totalOrders = orders.length;
    const pendingOrders = orders.filter(order => 
      order.status === 'DRAFT' || order.status === 'SUBMITTED'
    ).length;
    const validatedOrders = orders.filter(order => 
      order.status === 'VALIDATED' || order.status === 'PARTIALLY_VALIDATED'
    ).length;
    
    // Calculate delivered this month
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const deliveredThisMonth = orders.filter(order => {
      if (order.status !== 'DELIVERED' || !order.deliveredAt) return false;
      const deliveredDate = new Date(order.deliveredAt);
      return deliveredDate.getMonth() === currentMonth && 
             deliveredDate.getFullYear() === currentYear;
    }).length;

    return {
      totalOrders,
      pendingOrders,
      validatedOrders,
      deliveredThisMonth
    };
  }, [orders]);

  const getStatusColor = (status: string) => {
    const colors = {
      DRAFT: 'bg-gray-100 text-gray-800',
      SUBMITTED: 'bg-blue-100 text-blue-800',
      VALIDATED: 'bg-green-100 text-green-800',
      PARTIALLY_VALIDATED: 'bg-yellow-100 text-yellow-800',
      IN_PREPARATION: 'bg-orange-100 text-orange-800',
      PREPARED: 'bg-purple-100 text-purple-800',
      DELIVERED: 'bg-emerald-100 text-emerald-800',
      CANCELLED: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status: string) => {
    const texts = {
      DRAFT: 'Brouillon',
      SUBMITTED: 'Soumise',
      VALIDATED: 'Validée',
      PARTIALLY_VALIDATED: 'Partiellement validée',
      IN_PREPARATION: 'En préparation',
      PREPARED: 'Préparée',
      DELIVERED: 'Livrée',
      CANCELLED: 'Annulée'
    };
    return texts[status] || status;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (order.notes && order.notes.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate total items and quantities for each order
  const getOrderSummary = (order: any) => {
    const itemsCount = order.orderItems?.length || 0;
    const totalQuantity = order.orderItems?.reduce((sum: number, item: any) => 
      sum + (item.requestedQuantity || 0), 0) || 0;
    return { itemsCount, totalQuantity };
  };

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
            onClick={loadOrders}
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
            <p className="text-gray-600 mt-1">Coordinateur de Service</p>
          </div>
          <div className="flex gap-3">
            {/* <button 
              onClick={handleRefresh}
              disabled={refreshing}
              className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Actualiser
            </button> */}
            <AddButton label="Ajouter une commande" href="/coordinator/orders/add" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Commandes</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalOrders}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <span className="text-gray-500">Toutes les commandes</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">En Attente</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.pendingOrders}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <span className="text-yellow-600 font-medium">
                {stats.pendingOrders > 0 ? 'Action requise' : 'Aucune action'}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Validées</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.validatedOrders}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <span className="text-green-600 font-medium">
                {stats.validatedOrders > 0 ? 'Prêtes pour préparation' : 'Aucune validée'}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Livrées ce mois</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.deliveredThisMonth}</p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <Calendar className="w-4 h-4 text-gray-500 mr-1" />
              <span className="text-gray-500">
                {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
              </span>
            </div>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Mes Commandes</h2>
                <p className="text-gray-600 text-sm mt-1">
                  {filteredOrders.length} commande{filteredOrders.length !== 1 ? 's' : ''} trouvée{filteredOrders.length !== 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                
                <div className="relative">
                  <Filter className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white"
                  >
                    <option value="all">Tous les statuts</option>
                    <option value="DRAFT">Brouillon</option>
                    <option value="SUBMITTED">Soumise</option>
                    <option value="VALIDATED">Validée</option>
                    <option value="PARTIALLY_VALIDATED">Partiellement validée</option>
                    <option value="PREPARED">Préparée</option>
                    <option value="DELIVERED">Livrée</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Numéro de Commande
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Articles
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantité Totale
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date de Création
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notes
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => {
                  const { itemsCount, totalQuantity } = getOrderSummary(order);
                  return (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="font-medium text-gray-900">{order.orderNumber}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {itemsCount} article{itemsCount > 1 ? 's' : ''}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {totalQuantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(order.createdAt)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                        {order.notes || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                             <ViewAction href={`/coordinator/orders/${order.id}`} />
                          {(order.status === 'DRAFT' ) && (
                             <UpdateAction href={`/coordinator/orders/${order.id}/edit`} />
                          )}
                       
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredOrders.length === 0 && !loading && (
            <div className="text-center py-12">
              <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm || statusFilter !== 'all' ? 'Aucune commande trouvée' : 'Aucune commande'}
              </h3>
              <p className="text-gray-500">
                {searchTerm || statusFilter !== 'all' 
                  ? 'Essayez de modifier vos critères de recherche.'
                  : 'Créez votre première commande pour commencer.'
                }
              </p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Statut Global</h3>
              <div className={`w-3 h-3 rounded-full ${stats.pendingOrders > 0 ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Commandes actives</span>
                <span className="font-semibold text-gray-900">
                  {orders.filter(o => !['DELIVERED', 'CANCELLED'].includes(o.status)).length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">En brouillon</span>
                <span className="font-semibold text-gray-900">
                  {orders.filter(o => o.status === 'DRAFT').length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Taux de validation</span>
                <span className="font-semibold text-green-600">
                  {stats.totalOrders > 0 
                    ? Math.round(((stats.validatedOrders + orders.filter(o => o.status === 'DELIVERED').length) / stats.totalOrders) * 100)
                    : 0
                  }%
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
              <div className={`${stats.pendingOrders > 0 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'} text-xs px-2 py-1 rounded-full font-medium`}>
                {stats.pendingOrders}
              </div>
            </div>
            <div className="space-y-3">
              {orders.filter(o => o.status === 'DRAFT').slice(0, 2).map(order => (
                <div key={order.id} className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <div className="text-sm font-medium text-yellow-800">Commande en brouillon</div>
                  <div className="text-xs text-yellow-600">{order.orderNumber}</div>
                </div>
              ))}
              {orders.filter(o => ['VALIDATED', 'PARTIALLY_VALIDATED'].includes(o.status)).slice(0, 1).map(order => (
                <div key={order.id} className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <div className="text-sm font-medium text-blue-800">Validation reçue</div>
                  <div className="text-xs text-blue-600">{order.orderNumber} - {getStatusText(order.status)}</div>
                </div>
              ))}
              {stats.pendingOrders === 0 && (
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <div className="text-sm font-medium text-green-800">Tout est à jour</div>
                  <div className="text-xs text-green-600">Aucune action requise</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCoordinatorDashboard;