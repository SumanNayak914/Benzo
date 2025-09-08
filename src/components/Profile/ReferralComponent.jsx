import React, { useState } from 'react';
import { Share2, MessageCircle } from 'lucide-react';

const ReferralComponent = () => {
  const [referrals, setReferrals] = useState([]);

  const handleWhatsAppShare = () => {
    // Simulate WhatsApp sharing
    alert('Opening WhatsApp to share referral link...');
  };

  const handleShareLink = () => {
    // Simulate link sharing
    navigator.clipboard.writeText('https://example.com/referral/xyz123');
    alert('Referral link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-b-3xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold">25% off for you, Pass for them @ ₹1!</h1>
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">₹</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-300 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-4 right-20 w-8 h-8 bg-white/10 rounded-full"></div>
        <div className="absolute top-12 right-32 w-6 h-6 bg-white/15 rounded-full"></div>
        <div className="absolute bottom-8 left-10 w-4 h-4 bg-white/20 rounded-full"></div>
      </div>

      <div className="px-6 py-6">
        {/* How it works section */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">How it works</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-medium">Share the referral link</span> with your friend
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              </div>
              <div>
                <p className="text-gray-700">
                  After your friend places their first order, <span className="font-medium">you get 25% off</span> up to ₹200 on your next order
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              </div>
              <div>
                <p className="text-gray-700">
                  Upon 10 successful referrals, <span className="font-medium">you earn ₹2000</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-8">
          <button 
            onClick={handleWhatsAppShare}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-6 rounded-2xl flex items-center justify-center space-x-2 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Invite via Whatsapp</span>
          </button>
          
          <button 
            onClick={handleShareLink}
            className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-4 px-6 rounded-2xl border border-gray-200 flex items-center justify-center space-x-2 transition-colors"
          >
            <Share2 className="w-5 h-5" />
            <span>Share Invite Link</span>
          </button>
        </div>

        {/* Your Referrals Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Your Referrals</h2>
          
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Share2 className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-sm">
              No referrals yet. Share with friends to start saving!
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progress to ₹2000 bonus</span>
            <span className="text-sm text-gray-500">0/10</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {10 - referrals.length} more referrals needed to earn ₹2000
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferralComponent;