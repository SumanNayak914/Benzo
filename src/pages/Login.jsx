
import React, { useState } from 'react';
import { X } from "lucide-react";

export default function Login({ onClose }) { // Add onClose prop
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(false);

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) {
      value = value.substr(0, 10);
    }
    setPhoneNumber(value);
    setIsValidPhone(value.length === 10);
  };

  const handleSubmit = () => {
    if (isValidPhone) {
      alert(`OTP sent to +91${phoneNumber}`);
      // Close modal after successful submission
      if (onClose) onClose();
    } else {
      alert('Please enter a valid 10-digit phone number');
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose(); // If modal, close modal
    } else {
      // If standalone page, redirect to home (your existing logic)
      window.location.href = "/";
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div
        className="flex  w-full lg:rounded-3xl overflow-hidden  lg:flex-row flex-col"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Left Section */}
        <div
          className="flex-1 p-6 lg:p-12 text-white"
          style={{
            background:
              'linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #C084FC 100%)',
          }}
        >
          {/* Close Button */}
          <div className="mb-6">
            <button
              onClick={handleClose}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-800 transition-all duration-200"
            >
              <X className="text-white w-6 h-6" />
            </button>
          </div>

          <div
            className="text-4xl font-bold mb-8 tracking-tight"
            style={{ color: '#FF6B6B' }}
          >
            Benzo
          </div>

          <h1 className="text-3xl font-bold leading-tight mb-8">
            Fresh Drinks delivered
            <br />
            in 10 minutes
          </h1>

          <div className="mb-6">
            <div className="flex items-center rounded-full p-1 mb-5 bg-white">
              <span className="px-4 py-3 text-gray-600 font-medium border-r border-gray-200 text-sm">
                +91
              </span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="Enter Phone Number"
                className="flex-1 px-4 py-3 rounded-full outline-none text-black bg-transparent text-sm"
                maxLength="10"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!isValidPhone}
              className={`w-full py-4 rounded-full text-base font-semibold uppercase tracking-wider transition-all duration-300 border-0 ${
                isValidPhone
                  ? 'text-white hover:transform hover:-translate-y-1 hover:shadow-lg cursor-pointer'
                  : 'opacity-70 cursor-not-allowed text-white'
              }`}
              style={{
                background: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
              }}
            >
              Continue
            </button>
          </div>

          <p className="text-sm text-center opacity-80">
            By continuing, you agree to our
            <br />
            <span className="text-yellow-300 hover:underline cursor-pointer">
              Terms of Service
            </span>{' '}
            &{' '}
            <span className="text-yellow-300 hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </p>

          {/* Mobile App Store Badges */}
          <div className="lg:hidden mt-8">
            <p className="text-center text-sm opacity-80 mb-4">
              Download the Benzo App
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-white text-sm cursor-pointer hover:transform hover:-translate-y-1 transition-transform bg-black bg-opacity-20 backdrop-blur-sm border border-white border-opacity-20">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="whitespace-nowrap">
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-white text-sm cursor-pointer hover:transform hover:-translate-y-1 transition-transform bg-black bg-opacity-20 backdrop-blur-sm border border-white border-opacity-20">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.18 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                </div>
                <div className="whitespace-nowrap">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Hidden on mobile */}
        <div className="flex-1 p-12 flex-col items-center justify-center text-center bg-white bg-opacity-95 hidden lg:flex">
          <div className="relative mb-6">
            {/* Phone Illustration */}
            <div
              className="w-24 h-40 rounded-3xl shadow-lg relative"
              style={{ background: 'linear-gradient(135deg, #1F2937, #374151)' }}
            >
              <div
                className="absolute top-3 left-2 right-2 bottom-3 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #A855F7)',
                }}
              >
                <div
                  className="text-white text-3xl font-bold"
                  style={{ fontFamily: 'serif' }}
                >
                  B
                </div>
              </div>
            </div>

            {/* Sparkles */}
            <div
              className="absolute -top-2 -right-2 text-lg animate-pulse"
              style={{ color: '#FFD93D' }}
            >
              ✨
            </div>
            <div
              className="absolute -bottom-2 -left-2 text-lg animate-pulse"
              style={{ color: '#FFD93D', animationDelay: '0.5s' }}
            >
              ✨
            </div>
            <div
              className="absolute top-6 -left-3 text-sm animate-pulse"
              style={{ color: '#FFD93D', animationDelay: '1s' }}
            >
              ⭐
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-2" style={{ color: '#8B5CF6' }}>
            Order faster
          </h2>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">& easier</h2>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">everytime</h2>
          <p className="text-gray-600 text-base mb-6">with the Benzo App</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-xs cursor-pointer hover:transform hover:-translate-y-1 transition-transform bg-black">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <div className="whitespace-nowrap">
                <div className="text-xs opacity-80">GET IT ON</div>
                <div className="font-bold">Google Play</div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-xs cursor-pointer hover:transform hover:-translate-y-1 transition-transform bg-black">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.18 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
              <div className="whitespace-nowrap">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}