import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function ProfileForm() {
  const [name, setName] = useState('Suman');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', { name, email });
    // Add your submit logic here
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('Account deletion requested');
      // Add your delete account logic here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="w-full mx-auto bg-white rounded-lg shadow-sm">
        {/* Header */}
        {/* <div className="flex items-center p-4 border-b border-gray-200">
          <ArrowLeft className="w-6 h-6 text-gray-600 mr-3" />
          <h1 className="text-lg font-medium text-gray-900">Profile</h1>
        </div> */}

        {/* Form Content */}
        <div className="p-6">
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Enter your email"
              />
              <p className="text-sm text-gray-500 mt-2">We promise not to spam you</p>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              Submit
            </button>
          </div>

          {/* Delete Account Section */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h2 className="text-lg font-medium text-pink-500 mb-3">Delete Account</h2>
            <p className="text-sm text-gray-600 mb-4">
              Deleting your account will remove all your orders, wallet amount and any active referral
            </p>
            <button
              onClick={handleDeleteAccount}
              className="text-red-500 hover:text-red-600 font-medium text-sm transition-colors duration-200"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}