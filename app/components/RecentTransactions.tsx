"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, Utensils, Car, Zap, Coffee } from "lucide-react";

const transactions = [
    {
        id: 1,
        name: "Grocery Shopping",
        time: "Today, 10:30 AM",
        amount: "-₦12,500.00",
        icon: <ShoppingBag size={20} className="text-black bg-[#e8f8f5]" />,
        iconBg: "bg-[#e8f8f5]",
        isExpense: true,
    },
    {
        id: 2,
        name: "Lunch at Restaurant",
        time: "Today, 01:15 PM",
        amount: "-₦4,200.00",
        icon: <Utensils size={20} className="text-black bg-[#e8f8f5]" />,
        iconBg: "bg-[#e8f8f5]",
        isExpense: true,
    },
    {
        id: 3,
        name: "Uber Ride",
        time: "Yesterday, 06:45 PM",
        amount: "-₦3,500.00",
        icon: <Car size={20} className="text-black bg-[#e8f8f5]" />,
        iconBg: "bg-[#e8f8f5]",
        isExpense: true,
    },
    {
        id: 4,
        name: "Electric Bill",
        time: "Yesterday, 09:00 AM",
        amount: "-₦15,000.00",
        icon: <Zap size={20} className="text-black bg-[#e8f8f5]" />,
        iconBg: "bg-[#e8f8f5]",
        isExpense: true,
    },
    {
        id: 5,
        name: "Coffee",
        time: "Yesterday, 08:30 AM",
        amount: "-₦1,500.00",
        icon: <Coffee size={20} className="text-black bg-[#e8f8f5]" />,
        iconBg: "bg-[#e8f8f5]",
        isExpense: true,
    },
];

const RecentTransactions = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6 h-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-800">Recent Transactions</h2>
                <Link
                    href="/dashboard/transactions"
                    className="text-sm font-semibold text-[#18b0a0] hover:underline"
                >
                    View All
                </Link>
            </div>

            <div className="flex flex-col gap-4">
                {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div
                                className={`p-3 rounded-full flex items-center justify-center ${transaction.iconBg}`}
                            >
                                {transaction.icon}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">
                                    {transaction.name}
                                </p>
                                <p className="text-xs text-gray-500">{transaction.time}</p>
                            </div>
                        </div>
                        <p
                            className={`text-sm font-bold ${transaction.isExpense ? "text-red-500" : "text-green-500"
                                }`}
                        >
                            {transaction.amount}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentTransactions;
