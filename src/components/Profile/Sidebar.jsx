import React from "react";
import { Package, Headphones, Heart, MapPin, User, LogOut, Gift, CreditCard, Info } from "lucide-react";

const Sidebar = ({ activeComponent, setActiveComponent }) => {
  return (
    <div className="w-full bg-white h-auto  flex flex-col justify-between overflow-hidden  p-4">
      {/* User Profile Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Suman</h3>
            <p className="text-sm text-gray-500">7894487914</p>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-4 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">daily</span>
            </div>
            <p className="text-sm mb-3">
              You would potentially save <span className="font-bold">₹500</span> per month with CrateEasy Daily
            </p>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-300 transition-colors flex items-center">
              Get daily <span className="ml-1">→</span>
            </button>
          </div>
          <div className="absolute top-2 right-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">₹</span>
            </div>
          </div>
        </div>

        {/* CrateEasy Cash & Gift Card */}
        <div 
          className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setActiveComponent('balance')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Gift className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-medium text-gray-900">CrateEasy Cash & Gift Card</span>
            </div>
            <span className="text-gray-400">→</span>
          </div>
        </div>

        {/* Available Balance */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Available Balance: ₹0</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors"
          onClick={() => setActiveComponent('balance')}>
            Add Balance
          </button>
        </div>

        {/* Free Cash Banner */}
        <div 
          className="bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-lg p-3 cursor-pointer hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-200 transition-all"

        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gift className="h-4 w-4 text-pink-500" />
              <span className="text-sm font-medium text-gray-900">Free Cash</span>
              <Info className="h-4 w-4 text-gray-400" />
            </div>
            <span className="text-lg font-bold text-purple-600">₹50</span>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2 mt-6">
          <div 
            className={`flex items-center px-4 py-3 text-sm cursor-pointer rounded-lg transition-colors ${
              activeComponent === 'orders' 
                ? 'font-medium bg-gray-100 text-gray-900' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setActiveComponent('orders')}
          >
            <Package className={`mr-3 h-5 w-5 ${activeComponent === 'orders' ? 'text-gray-600' : 'text-gray-500'}`} />
            Orders
          </div>

          <div 
            className={`flex items-center px-4 py-3 text-sm cursor-pointer rounded-lg transition-colors ${
              activeComponent === 'support' 
                ? 'font-medium bg-gray-100 text-gray-900' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setActiveComponent('support')}
          >
            <Headphones className={`mr-3 h-5 w-5 ${activeComponent === 'support' ? 'text-gray-600' : 'text-gray-500'}`} />
            Customer Support
          </div>

          <div 
            className={`flex items-center px-4 py-3 text-sm cursor-pointer rounded-lg transition-colors ${
              activeComponent === 'referrals' 
                ? 'font-medium bg-gray-100 text-gray-900' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setActiveComponent('referrals')}
          >
            <Heart className={`mr-3 h-5 w-5 ${activeComponent === 'referrals' ? 'text-gray-600' : 'text-gray-500'}`} />
            Manage Referrals
          </div>

          <div 
            className={`flex items-center px-4 py-3 text-sm cursor-pointer rounded-lg transition-colors ${
              activeComponent === 'addresses' 
                ? 'font-medium bg-gray-100 text-gray-900' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setActiveComponent('addresses')}
          >
            <MapPin className={`mr-3 h-5 w-5 ${activeComponent === 'addresses' ? 'text-gray-600' : 'text-gray-500'}`} />
            Addresses
          </div>

          <div 
            className={`flex items-center px-4 py-3 text-sm cursor-pointer rounded-lg transition-colors ${
              activeComponent === 'profile' 
                ? 'font-medium bg-gray-100 text-gray-900' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setActiveComponent('profile')}
          >
            <User className={`mr-3 h-5 w-5 ${activeComponent === 'profile' ? 'text-gray-600' : 'text-gray-500'}`} />
            Profile
          </div>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">
        {/* Logout */}
        <div className=" pt-4">
          <div className="flex items-center justify-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors">
            <LogOut className=" h-4 w-4  text-gray-500" />
            <p className="font-bold  text-gray-500 text-lg">Log Out</p>
          </div>
        </div>

        {/* CrateEasy Logo */}
        <div className="text-center">
          <span className="text-2xl font-bold text-gray-400 tracking-wider">CrateEasy</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;