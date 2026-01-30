"use client";

import React, { useState } from "react";
import {
  X,
  Utensils,
  Car,
  Zap,
  Home,
  Building2,
  Gift,
  Smile,
  ShoppingBag,
  Heart,
  Briefcase,
  Plus,
} from "lucide-react";

interface Category {
  id: number;
  name: string;
  icon: React.ReactNode;
  iconBg: string;
  transactions: number;
  type: "expense" | "income";
}

const categories: Category[] = [
  {
    id: 1,
    name: "Food & Dining",
    icon: <Utensils size={24} />,
    iconBg: "bg-pink-100",
    transactions: 12,
    type: "expense",
  },
  {
    id: 2,
    name: "Transportation",
    icon: <Car size={24} />,
    iconBg: "bg-blue-100",
    transactions: 8,
    type: "expense",
  },
  {
    id: 3,
    name: "Utilities",
    icon: <Zap size={24} />,
    iconBg: "bg-yellow-100",
    transactions: 4,
    type: "expense",
  },
  {
    id: 4,
    name: "Housing",
    icon: <Home size={24} />,
    iconBg: "bg-green-100",
    transactions: 1,
    type: "expense",
  },
  {
    id: 5,
    name: "Salary",
    icon: <Building2 size={24} />,
    iconBg: "bg-gray-100",
    transactions: 2,
    type: "income",
  },
  {
    id: 6,
    name: "Gifts & Bonus",
    icon: <Gift size={24} />,
    iconBg: "bg-purple-100",
    transactions: 0,
    type: "income",
  },
];

const iconOptions = [
  { icon: <Smile size={24} />, name: "smile" },
  { icon: <ShoppingBag size={24} />, name: "shopping" },
  { icon: <Heart size={24} />, name: "heart" },
  { icon: <Briefcase size={24} />, name: "briefcase" },
  { icon: <Plus size={24} />, name: "plus" },
];

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState<"expense" | "income">(
    "expense"
  );
  const [categoryName, setCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<string>("");

  const expenseCategories = categories.filter((cat) => cat.type === "expense");
  const incomeCategories = categories.filter((cat) => cat.type === "income");

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto bg-[#18b0a0] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#159a8b] transition-colors"
        >
          New Category
        </button>
      </div>

      {/* Expense Categories Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Expense Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {expenseCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-lg ${category.iconBg} text-gray-700 flex-shrink-0`}
                >
                  {category.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 truncate">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {category.transactions} transaction
                    {category.transactions !== 1 ? "s" : ""} this month
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Income Categories Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Income Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {incomeCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-lg ${category.iconBg} text-gray-700 flex-shrink-0`}
                >
                  {category.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 truncate">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {category.transactions} transaction
                    {category.transactions !== 1 ? "s" : ""} this month
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Category Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full sm:max-w-md h-full shadow-2xl animate-slide-in overflow-y-auto">
            <div className="p-6 h-full flex flex-col">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  New Category
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1">
                {/* Transaction Type Toggle */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Transaction Type
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setTransactionType("expense")}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${transactionType === "expense"
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                      Expense
                    </button>
                    <button
                      onClick={() => setTransactionType("income")}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${transactionType === "income"
                          ? "bg-[#18b0a0] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                      Income
                    </button>
                  </div>
                </div>

                {/* Category Name */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Category Name
                  </label>
                  <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="e.g. Health & Fitness"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18b0a0] focus:border-transparent"
                  />
                </div>

                {/* Icon Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Icon
                  </label>
                  <div className="flex gap-3 flex-wrap">
                    {iconOptions.map((option) => (
                      <button
                        key={option.name}
                        onClick={() => setSelectedIcon(option.name)}
                        className={`p-3 rounded-lg border-2 transition-all ${selectedIcon === option.name
                            ? "border-[#18b0a0] bg-[#18b0a0] bg-opacity-10 text-[#18b0a0]"
                            : "border-gray-300 text-gray-600 hover:border-gray-400"
                          }`}
                      >
                        {option.icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Handle save logic here
                    setIsModalOpen(false);
                  }}
                  className="flex-1 py-3 px-4 bg-[#18b0a0] text-white rounded-lg font-semibold hover:bg-[#159a8b] transition-colors"
                >
                  Create Category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;