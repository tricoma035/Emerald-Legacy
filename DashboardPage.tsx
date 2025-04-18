import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, DollarSign, PackageCheck, Clock, AlertCircle, ChevronRight, TrendingUp } from 'lucide-react';
import { userListings, polishingRequests, orders, emeralds } from '../data/mockData';
import Card, { CardContent, CardHeader, CardFooter } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';

const StatsCard = ({ title, value, icon, change, trend }: { title: string; value: string; icon: React.ReactNode; change?: string; trend?: 'up' | 'down' | 'neutral' }) => {
  const trendColors = {
    up: 'text-emerald-600',
    down: 'text-red-600',
    neutral: 'text-slate-600',
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-slate-500 mb-1">{title}</p>
            <p className="text-2xl font-bold text-slate-900">{value}</p>
            {change && (
              <p className={`text-sm mt-1 flex items-center ${trend ? trendColors[trend] : ''}`}>
                {trend === 'up' && <TrendingUp size={14} className="mr-1" />}
                {trend === 'down' && <TrendingUp size={14} className="mr-1 transform rotate-180" />}
                {change}
              </p>
            )}
          </div>
          <div className="p-3 bg-slate-100 rounded-full">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
};

const DashboardPage = () => {
  return (
    <div className="bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Dashboard</h1>
          <p className="text-slate-600">
            Monitor your listings, track your orders, and manage your account.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <DashboardSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatsCard 
                title="Active Listings" 
                value="2" 
                icon={<DollarSign className="h-6 w-6 text-teal-700" />} 
                change="Up by 1 from last month" 
                trend="up"
              />
              <StatsCard 
                title="Completed Orders" 
                value="3" 
                icon={<PackageCheck className="h-6 w-6 text-amber-600" />}
                change="Same as last month" 
                trend="neutral"
              />
              <StatsCard 
                title="Pending Services" 
                value="2" 
                icon={<Clock className="h-6 w-6 text-blue-600" />}
                change="Down by 1 from last month" 
                trend="down"
              />
            </div>

            {/* Alerts */}
            <Card className="bg-amber-50 border border-amber-200">
              <CardContent className="p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-amber-800">Attention Required</h3>
                    <div className="mt-2 text-sm text-amber-700">
                      <p>Your polishing request for "Zambian Emerald" is ready for pickup. Please check your email for details.</p>
                    </div>
                    <div className="mt-3">
                      <div className="-mx-2 -my-1.5 flex">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Listings */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-slate-900">Your Listings</h2>
                <Link to="/dashboard/listings" className="text-teal-700 hover:text-teal-800 text-sm font-medium flex items-center">
                  View All <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="space-y-4">
                {userListings.map((listing) => (
                  <Card key={listing.id} className="overflow-hidden">
                    <div className="sm:flex">
                      <div className="sm:w-48 h-48 sm:h-auto">
                        <img 
                          src={listing.images[0]} 
                          alt={listing.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <Badge 
                                variant={listing.status === 'active' ? 'success' : 'warning'}
                                className="mb-2"
                              >
                                {listing.status === 'active' ? 'Active' : 'Pending Approval'}
                              </Badge>
                              <h3 className="text-lg font-medium text-slate-900">{listing.title}</h3>
                            </div>
                            <div className="text-right">
                              <p className="text-xl font-bold text-slate-900">${listing.price.toLocaleString()}</p>
                              <p className="text-sm text-slate-500">{listing.carat} carats</p>
                            </div>
                          </div>
                          <p className="text-slate-600 line-clamp-2 mb-4">{listing.description}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm text-slate-500">
                            <div className="flex items-center">
                              <span className="font-medium">Listed:</span>
                              <span className="ml-1">{new Date(listing.listed).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium">Origin:</span>
                              <span className="ml-1">{listing.origin}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium">Views:</span>
                              <span className="ml-1">{listing.views}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="font-medium">Inquiries:</span>
                              <span className="ml-1">{listing.inquiries}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end mt-4 space-x-3">
                          <Button variant="outline" size="sm">Edit Listing</Button>
                          <Button size="sm">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-slate-900">Recent Orders</h2>
                <Link to="/dashboard/purchases" className="text-teal-700 hover:text-teal-800 text-sm font-medium flex items-center">
                  View All <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <Card>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Order ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Item
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      {orders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                            {order.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                            {emeralds.find(e => e.id === order.emeraldId)?.title || 'Unknown'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                            {new Date(order.orderDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                            ${order.price.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge 
                              variant={
                                order.status === 'delivered' ? 'success' : 
                                order.status === 'shipped' ? 'info' : 
                                order.status === 'processing' ? 'warning' : 'default'
                              }
                            >
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                            <Button variant="text" size="sm" className="text-teal-700">
                              Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* Polishing Services */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-slate-900">Polishing Services</h2>
                <Link to="/dashboard/polishing" className="text-teal-700 hover:text-teal-800 text-sm font-medium flex items-center">
                  View All <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {polishingRequests.map((request) => (
                  <Card key={request.id}>
                    <CardHeader className="flex justify-between items-center">
                      <div>
                        <Badge 
                          variant={
                            request.status === 'completed' ? 'success' : 
                            request.status === 'in-progress' ? 'info' : 
                            request.status === 'pending' ? 'warning' : 'default'
                          }
                          className="mb-1"
                        >
                          {request.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </Badge>
                        <h3 className="text-lg font-medium text-slate-900">
                          {request.emeraldId 
                            ? emeralds.find(e => e.id === request.emeraldId)?.title 
                            : 'Custom Emerald'
                          }
                        </h3>
                      </div>
                      <p className="text-sm text-slate-500">
                        Request ID: {request.id}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Polish Type:</span>
                          <span className="font-medium text-slate-900">{request.polishType.charAt(0).toUpperCase() + request.polishType.slice(1)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Requested On:</span>
                          <span className="font-medium text-slate-900">{new Date(request.requestDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Scheduled Date:</span>
                          <span className="font-medium text-slate-900">
                            {request.scheduledDate ? new Date(request.scheduledDate).toLocaleDateString() : 'Not scheduled'}
                          </span>
                        </div>
                        {request.notes && (
                          <div className="pt-2 mt-2 border-t border-slate-200">
                            <p className="text-slate-600 text-xs italic">"{request.notes}"</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" fullWidth>View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;