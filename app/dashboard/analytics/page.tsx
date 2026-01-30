"use client";

import React, { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCard {
  title: string;
  amount: string;
  trend: number;
  isPositive: boolean;
}

const Analytics = () => {
  const [timePeriod, setTimePeriod] = useState<"weekly" | "monthly">("weekly");

  const stats: StatCard[] = [
    {
      title: "Total Income",
      amount: "$4,250.00",
      trend: 12,
      isPositive: true,
    },
    {
      title: "Total Expenses",
      amount: "$2,105.50",
      trend: 5,
      isPositive: false,
    },
    {
      title: "Net Savings",
      amount: "$2,144.50",
      trend: 8,
      isPositive: true,
    },
  ];

  const chartData = [
    { month: "JAN", income: 8500, expenses: 0 },
    { month: "FEB", income: 7000, expenses: 0 },
    { month: "MAR", income: 0, expenses: 9500 },
    { month: "APR", income: 8000, expenses: 0 },
    { month: "MAY", income: 0, expenses: 6500 },
    { month: "JUN", income: 0, expenses: 10000 },
  ];

  const spendingCategories = [
    { name: "Food & Dining", percentage: 35, color: "bg-blue-300" },
    { name: "Transport", percentage: 20, color: "bg-purple-300" },
    { name: "Utilities", percentage: 15, color: "bg-pink-300" },
    { name: "Shopping", percentage: 20, color: "bg-orange-300" },
    { name: "Entertainment", percentage: 10, color: "bg-teal-300" },
  ];

  const maxValue = Math.max(
    ...chartData.map((d) => Math.max(d.income, d.expenses))
  );

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={() => setTimePeriod("weekly")}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg font-medium transition-colors ${timePeriod === "weekly"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-300"
              }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setTimePeriod("monthly")}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg font-medium transition-colors ${timePeriod === "monthly"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-300"
              }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <p className="text-sm text-gray-500 mb-2">{stat.title}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {stat.amount}
            </h2>
            <div className="flex items-center gap-1">
              {stat.isPositive ? (
                <TrendingUp size={16} className="text-green-600" />
              ) : (
                <TrendingDown size={16} className="text-red-600" />
              )}
              <span
                className={`text-sm font-medium ${stat.isPositive ? "text-green-600" : "text-red-600"
                  }`}
              >
                {stat.isPositive ? "+" : "-"}
                {stat.trend}% vs last month
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Income vs Expenses Chart */}
        <div className="lg:col-span-2 bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-lg font-bold text-gray-900">
              Income vs Expenses
            </h2>
            <button className="text-sm font-semibold text-[#18b0a0] hover:underline">
              View Report
            </button>
          </div>

          {/* Chart Title */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              FINANCIAL OVERVIEW
            </h3>
            <p className="text-sm text-gray-500">MONTHLY INCOME VS. EXPENSES</p>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#18b0a0]"></div>
              <span className="text-sm text-gray-600">INCOME</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
              <span className="text-sm text-gray-600">EXPENSES</span>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="relative h-64 sm:h-80">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
              <span>$10,000</span>
              <span>$5,000</span>
              <span>$2,000</span>
              <span>$1,000</span>
              <span>$0</span>
            </div>

            {/* Chart area */}
            <div className="ml-12 sm:ml-16 h-full flex items-end justify-around gap-2 sm:gap-4 pb-8">
              {chartData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex justify-center items-end h-full gap-1">
                    {data.income > 0 && (
                      <div
                        className="bg-[#18b0a0] rounded-t w-full max-w-[40px] transition-all hover:opacity-80"
                        style={{
                          height: `${(data.income / maxValue) * 100}%`,
                        }}
                      ></div>
                    )}
                    {data.expenses > 0 && (
                      <div
                        className="bg-orange-400 rounded-t w-full max-w-[40px] transition-all hover:opacity-80"
                        style={{
                          height: `${(data.expenses / maxValue) * 100}%`,
                        }}
                      ></div>
                    )}
                  </div>
                  <span className="text-xs text-gray-600 mt-2">
                    {data.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spending Categories Pie Chart */}
        <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Spending Categories
          </h2>

          {/* Pie Chart */}
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              <svg viewBox="0 0 200 200" className="transform -rotate-90">
                {/* Generate pie slices */}
                {(() => {
                  let currentAngle = 0;
                  return spendingCategories.map((category, index) => {
                    const angle = (category.percentage / 100) * 360;
                    const startAngle = currentAngle;
                    currentAngle += angle;

                    const startX =
                      100 + 80 * Math.cos((startAngle * Math.PI) / 180);
                    const startY =
                      100 + 80 * Math.sin((startAngle * Math.PI) / 180);
                    const endX =
                      100 + 80 * Math.cos((currentAngle * Math.PI) / 180);
                    const endY =
                      100 + 80 * Math.sin((currentAngle * Math.PI) / 180);

                    const largeArcFlag = angle > 180 ? 1 : 0;

                    const colors = [
                      "#93C5FD",
                      "#C4B5FD",
                      "#F9A8D4",
                      "#FDBA74",
                      "#5EEAD4",
                    ];

                    return (
                      <path
                        key={index}
                        d={`M 100 100 L ${startX} ${startY} A 80 80 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                        fill={colors[index]}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    );
                  });
                })()}
                {/* Center circle for donut effect */}
                <circle cx="100" cy="100" r="50" fill="white" />
                <text
                  x="100"
                  y="95"
                  textAnchor="middle"
                  className="text-xs font-semibold fill-gray-500"
                  transform="rotate(90 100 100)"
                >
                  TOTAL EXPENSES
                </text>
                <text
                  x="100"
                  y="110"
                  textAnchor="middle"
                  className="text-sm font-bold fill-gray-900"
                  transform="rotate(90 100 100)"
                >
                  100%
                </text>
              </svg>
            </div>
          </div>

          {/* Category Legend */}
          <div className="space-y-3">
            {spendingCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${category.color}`}
                  ></div>
                  <span className="text-sm text-gray-700">{category.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {category.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;