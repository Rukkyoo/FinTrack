"use client";

import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    indexAxis: "y" as const,
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
            display: false, // Hiding legend as per typical dashboard designs for single dataset, but can be enabled if needed
        },
        title: {
            display: false,
            text: "Spending by category",
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                display: false,
            },
        },
    }
};

const labels = ["Housing", "Food", "Transport", "Shopping", "Others"];

const data = {
    labels,
    datasets: [
        {
            label: "Amount",
            data: [1200, 800, 450, 600, 300], // Mock data
            backgroundColor: [
                "rgba(24, 176, 160, 0.8)", // Primary emerald/teal color
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(153, 102, 255, 0.8)",
            ],
            borderRadius: 4,
        },
    ],
};

const SpendingChart = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Spending by category</h2>
            <div className="h-[300px] w-full">
                <Bar options={options} data={data} />
            </div>
        </div>
    );
};

export default SpendingChart;
