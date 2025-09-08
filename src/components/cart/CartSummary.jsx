import React, { useState } from 'react';
import { ChevronRight, Receipt, MessageSquare, HandHeart, Shield, ChevronUp, X } from 'lucide-react';

const CartSummary = () => {
  const [activeSection, setActiveSection] = useState(null);

  const summaryItems = [
    {
      id: 1,
      icon: <Receipt className="w-5 h-5 text-gray-600" />,
      title: "To Pay",
      description: "Incl. all taxes and charges",
      amount: "₹410.97",
      originalAmount: "₹541.97",
      savings: "SAVING ₹131",
      isClickable: true,
      type: 'bill'
    },
    {
      id: 2,
      icon: <MessageSquare className="w-5 h-5 text-gray-600" />,
      title: "Delivery Instructions",
      description: "Delivery partner will be notified",
      isClickable: true,
      type: 'instructions'
    },
    {
      id: 3,
      icon: <HandHeart className="w-5 h-5 text-gray-600" />,
      title: "Delivery Partner Tip",
      description: "This amount goes to your delivery partner",
      isClickable: true,
      type: 'tip'
    },
    {
      id: 4,
      icon: <Shield className="w-5 h-5 text-gray-600" />,
      title: "Delivery Partner's Safety",
      description: "Learn more about how we ensure their safety",
      isClickable: true,
      type: 'safety'
    }
  ];

  const handleSectionClick = (item) => {
    if (item.isClickable) {
      setActiveSection(activeSection === item.type ? null : item.type);
    }
  };

  const renderBillSummary = () => (
    <div className="p-4 space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-gray-700 text-sm">Item Total</span>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm line-through">₹499</span>
          <span className="text-gray-900 font-medium">₹398</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-gray-700 text-sm">Handling Charge</span>
        <span className="text-gray-900 font-medium">₹10.99</span>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-gray-700 text-sm">Delivery Fee</span>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm line-through">₹30</span>
          <span className="text-gray-900 font-medium">₹0</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-gray-700 text-sm">GST</span>
        <span className="text-gray-900 font-medium">₹1.98</span>
      </div>
      
      <div className="border-t border-gray-200 pt-3 mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-900 font-medium">To Pay</span>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm line-through">₹541.97</span>
              <span className="text-gray-900 font-semibold text-lg">₹410.97</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-xs">Incl. all taxes and charges</span>
          <span className="text-green-600 text-xs font-medium">SAVING ₹131</span>
        </div>
      </div>
    </div>
  );

  const renderInstructions = () => (
    <div className="p-3 space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded-lg p-2 text-center">
          <div className="text-lg mb-1">🐕</div>
          <div className="text-xs font-medium text-gray-900">Beware Of Pets</div>
          <div className="text-xs text-gray-500 mt-0.5">Delivery partner will be informed about the presence of pet(s)</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-2 text-center">
          <div className="text-lg mb-1">🔕</div>
          <div className="text-xs font-medium text-gray-900">Do Not Ring The Bell</div>
          <div className="text-xs text-gray-500 mt-0.5">Delivery partner will not ring the bell</div>
        </div>
      </div>
    </div>
  );

  const renderTip = () => (
    <div className="p-3 space-y-3">
      <div className="grid grid-cols-3 gap-2">
        <button className="bg-yellow-50 border border-yellow-200 rounded-lg py-2 px-1 text-center hover:bg-yellow-100 transition-colors">
          <div className="text-sm mb-0.5">🪙</div>
          <div className="text-xs font-medium text-gray-900">₹10</div>
        </button>
        
        <button className="bg-yellow-50 border border-yellow-200 rounded-lg py-2 px-1 text-center hover:bg-yellow-100 transition-colors">
          <div className="text-sm mb-0.5">🪙</div>
          <div className="text-xs font-medium text-gray-900">₹20</div>
        </button>
        
        <button className="bg-yellow-50 border border-yellow-200 rounded-lg py-2 px-1 text-center hover:bg-yellow-100 transition-colors">
          <div className="text-sm mb-0.5">🪙</div>
          <div className="text-xs font-medium text-gray-900">₹35</div>
        </button>
      </div>
      
      <button className="w-full border border-gray-300 rounded-lg py-2 text-center text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
        Add Custom Tip
      </button>
    </div>
  );

  const renderSafety = () => (
    <div className="p-3 space-y-3">
      <div className="text-center py-2">
        <div className="w-12 h-12 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
          <div className="text-lg">🛵</div>
        </div>
        <h3 className="text-gray-900 font-bold text-sm mb-1">Here's How We Do It</h3>
        <p className="text-gray-700 text-xs">At Zepto, Rider's safety is our responsibility</p>
      </div>
      
      <div className="space-y-2">
        <div className="bg-purple-50 rounded-lg p-2 flex items-start gap-2">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <div className="text-white text-xs">✓</div>
          </div>
          <div className="text-xs text-gray-900">Delivery partners ride safely at an average speed of 15kmph per delivery</div>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-2 flex items-start gap-2">
          <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <div className="text-white text-xs">⚡</div>
          </div>
          <div className="text-xs text-gray-900">No penalties for late deliveries & no incentives for on-time deliveries</div>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-2 flex items-start gap-2">
          <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <div className="text-white text-xs">🕒</div>
          </div>
          <div className="text-xs text-gray-900">Delivery partners are not informed about promised delivery time</div>
        </div>
      </div>
    </div>
  );

  const renderSectionContent = (type) => {
    switch (type) {
      case 'bill':
        return renderBillSummary();
      case 'instructions':
        return renderInstructions();
      case 'tip':
        return renderTip();
      case 'safety':
        return renderSafety();
      default:
        return null;
    }
  };

  const getSectionTitle = (type) => {
    switch (type) {
      case 'bill':
        return 'Bill Summary';
      case 'instructions':
        return 'Delivery Instructions';
      case 'tip':
        return 'Delivery Partner Tip';
      case 'safety':
        return "Delivery Partner's Safety";
      default:
        return '';
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white">
        {summaryItems.map((item, index) => (
          <div key={item.id} className={`${index !== summaryItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <div 
              className={`flex items-center gap-4 p-4 ${item.isClickable ? 'cursor-pointer hover:bg-gray-50' : ''}`}
              onClick={() => handleSectionClick(item)}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-gray-900 font-medium text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs">
                  {item.description}
                </p>
              </div>
              
              {/* Right Side - Amount or Arrow */}
              <div className="flex-shrink-0">
                {item.amount ? (
                  <div className="text-right flex items-center gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-400 text-xs line-through">{item.originalAmount}</span>
                        <span className="text-gray-900 font-semibold text-sm">{item.amount}</span>
                      </div>
                      <div className="text-green-600 text-xs font-medium">{item.savings}</div>
                    </div>
                    {item.isClickable && (
                      activeSection === item.type ? 
                        <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                ) : (
                  <div className="flex items-center">
                    {item.isClickable && (
                      activeSection === item.type ? 
                        <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Dropdown - For all sections */}
            {item.isClickable && activeSection === item.type && (
              <div className="hidden md:block bg-gray-50 border-t border-gray-100">
                {/* Header */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-200">
                  {item.icon}
                  <h3 className="text-gray-900 font-medium">{getSectionTitle(item.type)}</h3>
                </div>
                
                {/* Section Content */}
                {renderSectionContent(item.type)}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Bottom Sheet - For all sections */}
      {activeSection && (
        <div className="md:hidden">
          <div className="fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-out animate-slide-up">
            <div className="bg-white rounded-t-xl shadow-2xl max-w-md mx-auto border border-gray-200 max-h-[80vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white">
                <div className="flex items-center gap-3">
                  {summaryItems.find(item => item.type === activeSection)?.icon}
                  <h3 className="text-black font-semibold text-lg">{getSectionTitle(activeSection)}</h3>
                </div>
                <button 
                  onClick={() => setActiveSection(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>
              
              {/* Section Content */}
              <div className="text-black">
                {renderSectionContent(activeSection)}
              </div>
              
              {/* Safe area for mobile */}
              <div className="h-6"></div>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default CartSummary;