"use client";

import React from "react";
import { Plus, Home, ShoppingBag, Utensils } from "lucide-react";

const categories = [
    {
        id: 1,
        name: "Housing",
        amount: "₦120,000",
        icon: <Home size={24} className="text-[#18b0a0]" />,
        color: "text-[#18b0a0]",
        bgColor: "bg-[#e8f8f5]",
    },
    {
        id: 2,
        name: "Shopping",
        amount: "₦45,000",
        icon: <ShoppingBag size={24} className="text-[#ff6384]" />,
        color: "text-[#ff6384]",
        bgColor: "bg-[#fff0f3]",
    },
    {
        id: 3,
        name: "Food",
        amount: "₦25,000",
        icon: <Utensils size={24} className="text-[#36a2eb]" />,
        color: "text-[#36a2eb]",
        bgColor: "bg-[#eaf6fd]",
    },
];

const TopCategories = () => {
    return (
        <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Top Categories</h2>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-[#18b0a0] cursor-pointer rounded-lg hover:bg-[#18b0a0]/80 transition-colors">
                    <Plus size={18} />
                    Add budget
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-full ${category.bgColor}`}>
                                {category.icon}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-gray-500 font-bold text-sm mb-1">{category.name}</h3>
                            <p className="text-2xl font-bold text-gray-900">{category.amount}</p>
                        </div>
                        {/* Simple progress bar decoration */}
                        <div className="w-full bg-gray-100 h-2 rounded-full mt-4">
                            <div className={`h-full rounded-full ${category.bgColor.replace('bg-', 'bg-opacity-100 bg-').replace('text-', '')} w-2/3`}></div>
                            {/* Note: Tailwind color logic for dynamic progress bar might be tricky with just classes, 
                    using a simple safe color or mapping if needed. 
                    For now, I'll use the icon color but I need to extract it or map it. 
                    Let's just use `bg-green-500` etc if we knew them, or inline styles for dynamic colors.
                    Actually, let's just use a neutral or specific color class if possible.
                    I'll simplify and just use a standard color for now or try to match.
                */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCategories;
