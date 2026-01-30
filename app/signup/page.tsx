"use client";

import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, ChevronDown } from "lucide-react";
import Link from "next/link";

const SignUp = () => {
    const [activeTab, setActiveTab] = useState<"login" | "signup">("signup");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [currency, setCurrency] = useState("USD - US Dollar");
    const [showPassword, setShowPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const currencies = [
        "USD - US Dollar",
        "EUR - Euro",
        "GBP - British Pound",
        "JPY - Japanese Yen",
        "CAD - Canadian Dollar",
        "AUD - Australian Dollar",
        "NGN - Nigerian Naira",
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ username, email, password, currency });
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Side - Dark Background with Illustration */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-40 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500 rounded-full blur-2xl animate-pulse delay-500"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between p-12 w-full">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#18b0a0] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">F</span>
                        </div>
                        <span className="text-white text-xl font-bold">Fintrack</span>
                    </div>

                    {/* Illustration Area */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center space-y-8">
                            {/* Floating Cards Illustration */}
                            <div className="relative w-96 h-64">
                                {/* Card 1 */}
                                <div className="absolute top-0 left-0 w-64 h-40 bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-sm border border-teal-500/30 rounded-2xl p-6 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                                    <div className="text-teal-400 text-sm mb-2">MARKET CAP</div>
                                    <div className="text-white text-3xl font-bold">+12.5%</div>
                                    <div className="text-gray-400 text-xs mt-1">
                                        vs last month
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="absolute top-12 right-0 w-64 h-40 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                                    <div className="text-blue-400 text-sm mb-2">BALANCE</div>
                                    <div className="text-white text-3xl font-bold">
                                        $25,230.10
                                    </div>
                                    <div className="text-gray-400 text-xs mt-1">Total assets</div>
                                </div>

                                {/* Floating Icons */}
                                <div className="absolute -top-4 right-12 w-12 h-12 bg-teal-500/30 rounded-lg backdrop-blur-sm animate-bounce"></div>
                                <div className="absolute bottom-0 left-12 w-8 h-8 bg-purple-500/30 rounded-lg backdrop-blur-sm animate-bounce delay-300"></div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <p className="text-gray-300 text-sm mb-4 italic">
                            &quot;Fintrack has completely transformed how I manage my personal
                            finances. The insights are incredibly detailed yet easy to
                            understand.&quot;
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                                ER
                            </div>
                            <div>
                                <div className="text-white text-sm font-semibold">
                                    Elena Rodriguez
                                </div>
                                <div className="text-gray-400 text-xs">Product Designer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 bg-[#18b0a0] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">F</span>
                        </div>
                        <span className="text-gray-900 text-xl font-bold">Fintrack</span>
                    </div>

                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {activeTab === "signup" ? "Create an account" : "Welcome back"}
                        </h1>
                        <p className="text-gray-600 text-sm">
                            {activeTab === "signup"
                                ? "Enter your details below to create your account"
                                : "Enter your credentials to access your account"}
                        </p>
                        <div className="mt-2">
                            <span className="text-gray-600 text-sm">Need help? </span>
                            <Link
                                href="/support"
                                className="text-[#18b0a0] text-sm font-semibold hover:underline"
                            >
                                Contact Support
                            </Link>
                        </div>
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex gap-2 mb-6 bg-white rounded-lg p-1 border border-gray-200">
                        <button
                            type="button"
                            onClick={() => setActiveTab("login")}
                            className={`flex-1 py-2 text-center text-sm font-medium rounded-md transition-colors ${activeTab === "login"
                                ? "bg-gray-900 text-white"
                                : "text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            Log In
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab("signup")}
                            className={`flex-1 py-2 text-center text-sm font-medium rounded-md transition-colors ${activeTab === "signup"
                                ? "bg-gray-900 text-white"
                                : "text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Username - Only for Signup */}
                        {activeTab === "signup" && (
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Username
                                </label>
                                <div className="relative">
                                    <User
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        size={18}
                                    />
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="johndoe"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18b0a0] focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <Mail
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    size={18}
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@example.com"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18b0a0] focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    size={18}
                                />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••"
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18b0a0] focus:border-transparent"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                Must be at least 8 characters long
                            </p>
                        </div>

                        {/* Preferred Currency - Only for Signup */}
                        {activeTab === "signup" && (
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Preferred Currency
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        $
                                    </span>
                                    <select
                                        value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                        className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#18b0a0] focus:border-transparent cursor-pointer"
                                    >
                                        {currencies.map((curr) => (
                                            <option key={curr} value={curr}>
                                                {curr}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                                        size={18}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Terms & Conditions - Only for Signup */}
                        {activeTab === "signup" && (
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={agreedToTerms}
                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    className="mt-1 w-4 h-4 text-[#18b0a0] border-gray-300 rounded focus:ring-[#18b0a0]"
                                    required
                                />
                                <label htmlFor="terms" className="text-sm text-gray-600">
                                    I agree to the{" "}
                                    <Link
                                        href="/terms"
                                        className="text-gray-900 font-semibold hover:underline"
                                    >
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="/privacy"
                                        className="text-gray-900 font-semibold hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>
                        )}

                        {/* Forgot Password - Only for Login */}
                        {activeTab === "login" && (
                            <div className="flex justify-end">
                                <Link
                                    href="/forgot-password"
                                    className="text-sm font-semibold text-[#18b0a0] hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#18b0a0] text-white py-3 rounded-lg font-semibold hover:bg-[#159a8b] transition-colors"
                        >
                            {activeTab === "signup" ? "Create account" : "Log in"}
                        </button>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-gray-50 text-gray-500">
                                    OR CONTINUE WITH
                                </span>
                            </div>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                <span className="text-sm font-medium text-gray-700">
                                    Google
                                </span>
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="#1877F2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <span className="text-sm font-medium text-gray-700">
                                    Facebook
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
