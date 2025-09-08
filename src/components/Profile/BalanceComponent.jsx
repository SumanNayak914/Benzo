import React, { useState } from 'react';
import { Plus, Minus, CreditCard, Smartphone, Gift, ArrowRight } from 'lucide-react';

const BalanceComponent = () => {
  const [balance, setBalance] = useState(0);
  const [addAmount, setAddAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [showAddMoney, setShowAddMoney] = useState(false);

  const quickAmounts = [100, 500, 1000, 2000, 5000];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'upi', name: 'UPI', icon: Smartphone },
    { id: 'wallet', name: 'Other Wallet', icon: Gift }
  ];

  const handleAddMoney = () => {
    const amount = parseFloat(addAmount);
    if (amount > 0) {
      setBalance(prev => prev + amount);
      setAddAmount('');
      setShowAddMoney(false);
    }
  };

  const handleQuickAdd = (amount) => {
    setAddAmount(amount.toString());
  };

  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-200 text-sm">Available Balance</p>
            <p className="text-white text-3xl font-bold">₹{balance.toFixed(2)}</p>
          </div>
          <div className="bg-yellow-400 rounded-full p-3">
            <div className="text-purple-800 font-bold text-lg">💰</div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50">
        <div className="text-center">
          <div className="bg-purple-100 rounded-full p-3 mx-auto w-12 h-12 flex items-center justify-center mb-2">
            <div className="text-purple-600">⚡</div>
          </div>
          <p className="text-xs text-gray-600">Easy & Fast Payments</p>
        </div>
        <div className="text-center">
          <div className="bg-purple-100 rounded-full p-3 mx-auto w-12 h-12 flex items-center justify-center mb-2">
            <div className="text-purple-600">₹</div>
          </div>
          <p className="text-xs text-gray-600">Instant Refunds</p>
        </div>
        <div className="text-center">
          <div className="bg-purple-100 rounded-full p-3 mx-auto w-12 h-12 flex items-center justify-center mb-2">
            <div className="text-purple-600">🎁</div>
          </div>
          <p className="text-xs text-gray-600">Exclusive Offers</p>
        </div>
      </div>

      {/* Add Money Button */}
      <div className="p-4">
        <button
          onClick={() => setShowAddMoney(!showAddMoney)}
          className="w-fit mx-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          Add Money to Balance
        </button>
      </div>

      {/* Add Money Modal */}
      {showAddMoney && (
        <div className="border-t bg-gray-50 p-4">
          <h3 className="font-semibold text-gray-800 mb-4">Add Money</h3>
          
          {/* Quick Amount Buttons */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Quick Add</p>
            <div className="grid grid-cols-3 gap-2">
              {quickAmounts.map(amount => (
                <button
                  key={amount}
                  onClick={() => handleQuickAdd(amount)}
                  className="bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm font-medium hover:bg-purple-50 hover:border-purple-200 transition duration-200"
                >
                  ₹{amount}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount Input */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">Custom Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
              <input
                type="number"
                value={addAmount}
                onChange={(e) => setAddAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                min="1"
              />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Payment Method</p>
            <div className="space-y-2">
              {paymentMethods.map(method => {
                const IconComponent = method.icon;
                return (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition duration-200 ${
                      selectedMethod === method.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent size={20} className={selectedMethod === method.id ? 'text-purple-600' : 'text-gray-500'} />
                      <span className="font-medium text-gray-800">{method.name}</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedMethod === method.id
                        ? 'border-purple-500 bg-purple-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedMethod === method.id && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setShowAddMoney(false)}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg transition duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleAddMoney}
              disabled={!addAmount || parseFloat(addAmount) <= 0}
              className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
            >
              Add ₹{addAmount || '0'}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Recent Transactions */}
      <div className="p-4 border-t">
        <h3 className="font-semibold text-gray-800 mb-3">Recent Activity</h3>
        {balance > 0 ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Plus size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Money Added</p>
                  <p className="text-xs text-gray-500">Just now</p>
                </div>
              </div>
              <p className="font-semibold text-green-600">+₹{balance.toFixed(2)}</p>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">💳</div>
            <p className="text-gray-500 text-sm">No transactions yet</p>
            <p className="text-gray-400 text-xs">Add money to get started</p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="bg-blue-50 p-4 text-center">
        <p className="text-blue-600 text-sm font-medium">🔒 100% Secure & Encrypted</p>
        <p className="text-blue-500 text-xs mt-1">Your money is safe with bank-level security</p>
      </div>
    </div>
  );
};

export default BalanceComponent;