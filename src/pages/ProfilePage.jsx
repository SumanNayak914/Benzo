
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Sidebar from "../components/Profile/Sidebar";   
import Orders from "../components/Profile/Orders";
import ToggleFAQ from "../components/Profile/ToggleFAQ";
import ReferralComponent from "../components/Profile/ReferralComponent";
import AddressComponent from "../components/Profile/AddressComponent";
import ProfileForm from "../components/Profile/ProfileForm";
import BalanceComponent from "../components/Profile/BalanceComponent";

const ProfilePage = () => {
  const [activeComponent, setActiveComponent] = useState('orders');
  const [showSidebar, setShowSidebar] = useState(true);

  const renderMainComponent = () => {
    switch (activeComponent) {
      case 'orders':
        return <Orders />;
      case 'support':
        return <ToggleFAQ />;
      case 'referrals':
        return <ReferralComponent />;
      case 'addresses':
        return <AddressComponent />;
      case 'profile':
        return <ProfileForm />;
      case 'balance':
        return <BalanceComponent />;
      case 'faq':
        return <ToggleFAQ />;
      default:
        return <Orders />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl  overflow-y-auto">
        <div className="flex h-screen">
          
          {/* Sidebar */}
          <div className={`${showSidebar ? 'block' : 'hidden'} lg:block`}>
            <Sidebar 
              activeComponent={activeComponent} 
              setActiveComponent={(component) => {
                setActiveComponent(component);
                if (window.innerWidth < 1024) {
                  setShowSidebar(false);
                }
              }}
            />
          </div>
          
          {/* Main Content Area */}
          <div className={`flex-1 ${showSidebar ? 'hidden lg:block' : 'block'} h-screen overflow-y-auto no-scrollbar`}>
            
            {/* Mobile Back Button Header */}
            <div className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center sticky top-0 z-10">
              <button 
                onClick={() => setShowSidebar(true)}
                className="mr-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <h1 className="text-lg font-semibold capitalize">
                {activeComponent === 'balance' ? 'Zepto Cash' : activeComponent}
              </h1>
            </div>
            
            {/* Scrollable Content */}
            <div className="bg-white min-h-full">
              {renderMainComponent()}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
