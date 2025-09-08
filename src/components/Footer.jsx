import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="hidden md:block bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Social Icons */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-pink-500">
              Benjo
            </div>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-500 hover:text-pink-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-500 hover:text-pink-500 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-500 hover:text-pink-500 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-500 hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
            <p className="text-sm text-gray-500">
              © Benjo Marketplace Private Limited
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Company</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-gray-600 hover:text-pink-500 transition-colors">Home</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-pink-500 transition-colors">Delivery Areas</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-pink-500 transition-colors">Careers</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-pink-500 transition-colors">Customer Support</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-pink-500 transition-colors">Press</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-pink-500 transition-colors">Mojo - a Benjo Blog</a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-gray-600 hover:text-pink-500 transition-colors">Privacy Policy</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-pink-500 transition-colors">Terms of Use</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-pink-500 transition-colors">Responsible Disclosure Policy</a>
            </div>
          </div>

          {/* Business & Apps */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Partner & Download</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-gray-600 hover:text-pink-500 transition-colors">Sell on Benjo</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-pink-500 transition-colors">Deliver with Benjo</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-pink-500 transition-colors">Franchise with Benjo</a>
            </div>
            
            <div className="pt-2 space-y-2">
              <h4 className="font-medium text-gray-900 text-sm">Download App</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-500 transition-colors">
                  <span className="text-green-500">▶</span>
                  <span>Get it on play store</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-pink-500 transition-colors">
                  <span className="text-gray-800">🍎</span>
                  <span>Get it on app store</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
