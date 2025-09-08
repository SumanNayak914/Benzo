import React from 'react';
import { ChevronLeft, ChevronRight, Package, CheckCircle, XCircle } from 'lucide-react';

const OrderComponent = () => {
  const orders = [
    {
      id: 1,
      status: 'cancelled',
      placedAt: '25th Aug 2025, 08:42 am',
      amount: 462.97,
      productImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop&crop=center',
      productName: 'Wireless Headphones'
    },
    {
      id: 2,
      status: 'delivered',
      placedAt: '24th Aug 2025, 02:15 pm',
      amount: 299.50,
      productImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop&crop=center',
      productName: 'Smart Watch'
    },
    {
      id: 3,
      status: 'delivered',
      placedAt: '23rd Aug 2025, 11:30 am',
      amount: 150.75,
      productImage: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=80&h=80&fit=crop&crop=center',
      productName: 'Phone Case'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <Package className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'cancelled':
        return 'text-red-600';
      case 'delivered':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      {/* <div className="bg-white ">
        <div className="max-w-md px-4  py-4 flex items-center">
          <ChevronLeft className="w-6 h-6 text-gray-600 mr-3" />
          <h1 className="text-lg font-semibold text-gray-900">Orders</h1>
        </div>
      </div> */}

      {/* Orders List */}
      <div className="w-full  px-4 py-4 space-y-3">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4">
              <div className="flex items-start space-x-3">
                {/* Product Image */}
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={order.productImage} 
                    alt={order.productName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Order Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    {getStatusIcon(order.status)}
                    <span className={`text-sm font-medium capitalize ${getStatusColor(order.status)}`}>
                      Order {order.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-1">{order.productName}</p>
                  <p className="text-xs text-gray-400">
                    Placed at {order.placedAt}
                  </p>
                </div>

                {/* Amount and Arrow */}
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <span className="text-lg font-semibold text-gray-900">
                    ₹{order.amount}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="max-w-full mx-auto px-4 py-6">
        <div className="bg-white  rounded-lg shadow-sm border border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Orders:</span>
              <span className="font-medium">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-600">Delivered:</span>
              <span className="font-medium text-green-600">2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-600">Cancelled:</span>
              <span className="font-medium text-red-600">1</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <span className="text-gray-900 font-medium">Total Amount:</span>
              <span className="font-semibold text-gray-900">₹913.22</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;