import React, { useState } from 'react';
import { Plus, X, MapPin, Home, Building2, ChevronDown, ChevronUp } from 'lucide-react';

const AddressComponent = () => {
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [expandedAddress, setExpandedAddress] = useState(null);
  const [formData, setFormData] = useState({
    type: 'home',
    fullName: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    landmark: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.fullName && formData.phoneNumber && formData.addressLine1 && formData.city && formData.pincode) {
      setAddresses([...addresses, { ...formData, id: Date.now() }]);
      setFormData({
        type: 'home',
        fullName: '',
        phoneNumber: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        pincode: '',
        landmark: ''
      });
      setShowForm(false);
    }
  };

  const deleteAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
    if (expandedAddress === id) {
      setExpandedAddress(null);
    }
  };

  const toggleExpanded = (id) => {
    setExpandedAddress(expandedAddress === id ? null : id);
  };

  const EmptyStateIllustration = () => (
    <div className="flex flex-col items-center justify-center py-16 px-8">
      <div className="relative mb-6">
        {/* Ice cream cone */}
        <div className="w-24 h-32 relative">
          {/* Cone */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-20 bg-gradient-to-b from-yellow-600 to-yellow-800 transform rotate-0"
                 style={{
                   clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
                   background: 'linear-gradient(45deg, #d97706 0%, #92400e 100%)'
                 }}>
            </div>
            {/* Cone pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full"
                   style={{
                     backgroundImage: `repeating-linear-gradient(
                       45deg,
                       transparent,
                       transparent 3px,
                       rgba(0,0,0,0.1) 3px,
                       rgba(0,0,0,0.1) 6px
                     )`
                   }}>
              </div>
            </div>
          </div>
          
          {/* Scattered toppings */}
          <div className="absolute -top-2 left-8">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          </div>
          <div className="absolute -top-1 right-6">
            <div className="w-2 h-4 bg-pink-400 rounded-full transform rotate-45 animate-bounce" style={{animationDelay: '0.5s'}}></div>
          </div>
          <div className="absolute top-2 left-4">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
          <div className="absolute top-1 right-8">
            <div className="w-3 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
          </div>
          <div className="absolute top-4 left-12">
            <div className="w-2 h-3 bg-green-400 rounded-full transform rotate-12 animate-bounce" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-2">No Address Added</h3>
      <p className="text-gray-600 text-center text-sm max-w-sm">
        To see the saved address here, add your work or home address
      </p>
    </div>
  );

  return (
    <div className="max-w-full mx-auto bg-white min-h-screen ">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 p-4">
        <button 
          onClick={() => setShowForm(!showForm)}
          className="flex items-center text-pink-600 font-medium text-sm hover:text-pink-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Address
        </button>
      </div>

      {/* Add Address Form Dropdown */}
      {showForm && (
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="p-4 space-y-4">
            {/* Address Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address Type</label>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setFormData({...formData, type: 'home'})}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-colors ${
                    formData.type === 'home' 
                      ? 'border-green-500 bg-green-50 text-green-700' 
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span className="text-sm font-medium">Home</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({...formData, type: 'work'})}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-colors ${
                    formData.type === 'work' 
                      ? 'border-blue-500 bg-blue-50 text-blue-700' 
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Work</span>
                </button>
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter full name"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter phone number"
                required
              />
            </div>

            {/* Address Line 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1 *</label>
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="House No, Building Name"
                required
              />
            </div>

            {/* Address Line 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Street, Area"
              />
            </div>

            {/* City and State */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="City"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="State"
                />
              </div>
            </div>

            {/* Pincode */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter pincode"
                required
              />
            </div>

            {/* Landmark */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Landmark</label>
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Nearby landmark"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors"
              >
                Save Address
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Saved Addresses Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Saved Addresses</h2>
        
        {addresses.length === 0 ? (
          <div className="bg-gray-50 rounded-lg">
            <EmptyStateIllustration />
          </div>
        ) : (
          <div className="space-y-3">
            {addresses.map((address) => (
              <div key={address.id} className="bg-gray-50 rounded-lg overflow-hidden">
                {/* Address Header - Always Visible */}
                <div 
                  className="p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => toggleExpanded(address.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {address.type === 'home' ? (
                          <Home className="w-5 h-5 text-green-600" />
                        ) : (
                          <Building2 className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-800 capitalize">{address.type}</span>
                        </div>
                        <h4 className="font-medium text-gray-900">{address.fullName}</h4>
                        <p className="text-sm text-gray-600 truncate max-w-[200px]">
                          {address.addressLine1}, {address.city}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteAddress(address.id);
                        }}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="text-gray-400">
                        {expandedAddress === address.id ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedAddress === address.id && (
                  <div className="px-4 pb-4 border-t border-gray-200 bg-white">
                    <div className="pt-3 space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-700">Phone:</span>
                        <span className="text-gray-600">{address.phoneNumber}</span>
                      </div>
                      
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Complete Address:</span>
                        <p className="text-gray-600 mt-1 leading-relaxed">
                          {address.addressLine1}
                          {address.addressLine2 && <><br />{address.addressLine2}</>}
                          <br />{address.city}
                          {address.state && <>, {address.state}</>}
                          {' - '}{address.pincode}
                        </p>
                      </div>

                      {address.landmark && (
                        <div className="text-sm">
                          <span className="font-medium text-gray-700">Landmark:</span>
                          <p className="text-gray-600">{address.landmark}</p>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex space-x-3 pt-3">
                        <button className="flex-1 bg-pink-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors">
                          Set as Default
                        </button>
                        <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressComponent;