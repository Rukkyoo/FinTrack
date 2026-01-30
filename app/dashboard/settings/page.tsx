"use client";

import React, { useState } from "react";
import { ChevronDown, Camera } from "lucide-react";

const Settings = () => {
  const [username, setUsername] = useState("elenarodriguez");
  const [email, setEmail] = useState("elena.rodriguez@example.com");
  const [currency, setCurrency] = useState("USD - US Dollar");

  const currencies = [
    "USD - US Dollar",
    "EUR - Euro",
    "GBP - British Pound",
    "JPY - Japanese Yen",
    "CAD - Canadian Dollar",
    "AUD - Australian Dollar",
    "NGN - Nigerian Naira",
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Profile & Settings</h1>
      </div>

      {/* Personal Information Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6">
          Personal Information
        </h2>

        {/* Profile Picture and Name */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6 pb-6 border-b border-gray-200">
          <div className="relative">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
              ER
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#18b0a0] rounded-full flex items-center justify-center text-white hover:bg-[#159a8b] transition-colors shadow-md">
              <Camera size={16} />
            </button>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Elena Rodriguez</h3>
            <p className="text-sm text-gray-500">Member since Jan 2024</p>
          </div>
        </div>

        {/* Username Field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18b0a0] focus:border-transparent"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18b0a0] focus:border-transparent"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-6 py-2 bg-[#18b0a0] text-white rounded-lg font-semibold hover:bg-[#159a8b] transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* App Preferences Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6">
          App Preferences
        </h2>

        {/* Currency Selector */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Currency
          </label>
          <div className="relative">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#18b0a0] focus:border-transparent cursor-pointer"
            >
              {currencies.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              size={20}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            This will be used as the default currency for all your transactions
            and reports.
          </p>
        </div>

        {/* Additional Preferences (Optional) */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Email Notifications
              </h3>
              <p className="text-xs text-gray-500">
                Receive email updates about your transactions
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#18b0a0] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#18b0a0]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Monthly Reports
              </h3>
              <p className="text-xs text-gray-500">
                Get monthly spending summaries
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#18b0a0] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#18b0a0]"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;