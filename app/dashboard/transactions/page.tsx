"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  X,
  ShoppingCart,
  Building2,
  Car,
  Wifi,
  Film,
} from "lucide-react";

interface Transaction {
  id: number;
  name: string;
  description: string;
  category: string;
  categoryColor: string;
  date: string;
  amount: number;
  isExpense: boolean;
  icon: React.ReactNode;
  iconBg: string;
}

const transactions: Transaction[] = [
  {
    id: 1,
    name: "Whole Foods Market",
    description: "Weekly groceries",
    category: "Food & Dining",
    categoryColor: "bg-green-100 text-green-700",
    date: "Oct 24, 2023",
    amount: 125.5,
    isExpense: true,
    icon: <ShoppingCart size={20} />,
    iconBg: "bg-gray-100",
  },
  {
    id: 2,
    name: "Upwork Escrow",
    description: "Freelance project: payroll",
    category: "Income",
    categoryColor: "bg-blue-100 text-blue-700",
    date: "Oct 23, 2023",
    amount: 2500.0,
    isExpense: false,
    icon: <Building2 size={20} />,
    iconBg: "bg-blue-100",
  },
  {
    id: 3,
    name: "Shell Station",
    description: "Gas refill",
    category: "Transport",
    categoryColor: "bg-red-100 text-red-700",
    date: "Oct 22, 2023",
    amount: 45.0,
    isExpense: true,
    icon: <Car size={20} />,
    iconBg: "bg-red-100",
  },
  {
    id: 4,
    name: "Comcast Internet",
    description: "Monthly bill",
    category: "Utilities",
    categoryColor: "bg-purple-100 text-purple-700",
    date: "Oct 20, 2023",
    amount: 89.99,
    isExpense: true,
    icon: <Wifi size={20} />,
    iconBg: "bg-purple-100",
  },
  {
    id: 5,
    name: "Netflix Subscription",
    description: "Standard plan",
    category: "Entertainment",
    categoryColor: "bg-pink-100 text-pink-700",
    date: "Oct 19, 2023",
    amount: 15.99,
    isExpense: true,
    icon: <Film size={20} />,
    iconBg: "bg-pink-100",
  },
];

const Transactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState<"expense" | "income">(
    "expense"
  );
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("Oct 25, 2023");
  const [description, setDescription] = useState("What was this for?");
  const [isRecurring, setIsRecurring] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto bg-[#18b0a0] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#159a8b] transition-colors"
        >
          Add Transaction
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18b0a0] focus:border-transparent"
            />
          </div>
          <div className="flex gap-3 sm:gap-4">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-sm font-medium text-gray-700">
                All Categories
              </span>
              <ChevronDown size={16} className="text-gray-500" />
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-sm font-medium text-gray-700">All Types</span>
              <ChevronDown size={16} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Desktop Table Header */}
        <div className="hidden md:grid grid-cols-4 gap-4 p-4 border-b border-gray-200 bg-gray-50">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Transaction
          </div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Category
          </div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Date
          </div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
            Amount
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <div key={transaction.id}>
              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-4 gap-4 p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${transaction.iconBg} text-gray-700`}
                  >
                    {transaction.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {transaction.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {transaction.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${transaction.categoryColor}`}
                  >
                    {transaction.category}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-600">{transaction.date}</span>
                </div>
                <div className="flex items-center justify-end">
                  <span
                    className={`text-sm font-semibold ${transaction.isExpense ? "text-gray-900" : "text-green-600"
                      }`}
                  >
                    {transaction.isExpense ? "-" : "+"} ${" "}
                    {transaction.amount.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Mobile Card Layout */}
              <div className="md:hidden p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className={`p-2 rounded-lg ${transaction.iconBg} text-gray-700`}
                    >
                      {transaction.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">
                        {transaction.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {transaction.description}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-sm font-semibold whitespace-nowrap ml-2 ${transaction.isExpense ? "text-gray-900" : "text-green-600"
                      }`}
                  >
                    {transaction.isExpense ? "-" : "+"} ${" "}
                    {transaction.amount.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${transaction.categoryColor}`}
                  >
                    {transaction.category}
                  </span>
                  <span className="text-xs text-gray-500">{transaction.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Transaction Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full sm:max-w-md h-full shadow-2xl animate-slide-in">
            <div className="p-6 h-full flex flex-col">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Add Transaction
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto">
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
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                      Income
                    </button>
                  </div>
                </div>

                {/* Amount */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                      $
                    </span>
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18b0a0] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#18b0a0] focus:border-transparent text-gray-600"
                    >
                      <option value="">Select a category</option>
                      <option value="food">Food & Dining</option>
                      <option value="transport">Transport</option>
                      <option value="utilities">Utilities</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="shopping">Shopping</option>
                      <option value="income">Income</option>
                    </select>
                    <ChevronDown
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={20}
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Date
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18b0a0] focus:border-transparent"
                  />
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Description
                  </label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18b0a0] focus:border-transparent"
                  />
                </div>

                {/* Recurring Transaction */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Recurring Transaction
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={isRecurring}
                        onChange={(e) => setIsRecurring(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-11 h-6 rounded-full transition-colors ${isRecurring ? "bg-[#18b0a0]" : "bg-gray-300"
                          }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${isRecurring ? "transform translate-x-5" : ""
                          }`}
                      ></div>
                    </div>
                  </label>
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
                  Save Transaction
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;