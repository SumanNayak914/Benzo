
import React, { useState } from 'react';
import { X, ArrowLeft } from "lucide-react";

export default function Login({ onClose }) {
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
      if (onClose) onClose();
    } else {
      alert('Please enter a valid 10-digit phone number');
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen md:min-h-auto">
      <div
        className="flex w-full h-screen md:h-auto md:rounded-3xl overflow-hidden md:flex-row flex-col"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Left Section */}
        <div
          className="flex-1 p-6 lg:p-12 text-white flex flex-col min-h-screen md:min-h-auto"
          style={{
            background:
              'linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #C084FC 100%)',
          }}
        >
          {/* Mobile Close Button */}
          <div className="mb-6 md:hidden">
            <button
              onClick={handleClose}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
            >
              <ArrowLeft className="text-white w-6 h-6" />
            </button>
          </div>

          <div
            className="text-4xl font-bold mb-8 tracking-tight"
            style={{ color: '#FF6B6B' }}
          >
            CrateEasy
          </div>

          <h1 className="text-3xl font-bold leading-tight mb-8">
            Fresh Drinks delivered
            <br />
            in 10 minutes
          </h1>

          <div className="mb-6 flex-1 flex flex-col justify-center">
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

          <p className="text-sm text-center opacity-80 mt-auto">
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

          {/* 👉 Mobile Play Store Button */}
          <div className="flex justify-center mt-6 block md:hidden">
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
          </div>
        </div>

        {/* Right Section - Hidden on mobile and tablet */}
        <div className="flex-1 p-12 flex-col items-center justify-center text-center bg-white bg-opacity-95 hidden md:flex">
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
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: 'serif' }}
                >
                  Crate <span>Easy</span>
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
          <p className="text-gray-600 text-base mb-6 text-center">
            with the CrateEasy App
          </p>

          <div className="flex justify-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}
