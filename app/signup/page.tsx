"use client";

import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, ChevronDown } from "lucide-react";
import { signupUser, loginUser } from "../services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"login" | "signup">("signup");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [currency, setCurrency] = useState("USD - US Dollar");
    const [showPassword, setShowPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [loading, setIsLoading] = useState(false)

    const currencies = [
        "USD - US Dollar",
        "EUR - Euro",
        "GBP - British Pound",
        "JPY - Japanese Yen",
        "CAD - Canadian Dollar",
        "AUD - Australian Dollar",
        "NGN - Nigerian Naira",
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        if (activeTab === "signup") {
            try {
                const result = await signupUser({
                    username,
                    email,
                    password,
                    currencycode: currency.split(" - ")[0],
                });
                console.log("Signup successful: ", result);
                router.push("/dashboard");
            } catch (error) {
                console.error("Signup error: ", error);
                setIsLoading(false);
            }
        } else {
            try {
                const result = await loginUser({
                    username,
                    password,
                })
                console.log("Login successful: ", result)
                router.push("/dashboard");
            } catch (error) {
                console.error("Error logging in: ", error)
                setIsLoading(false);
            }
        }
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

                        {/* Username - For Login */}
                        {activeTab === "login" && (
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

                        {/* Email - Only for Signup */}
                        {activeTab === "signup" && (
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
                        )}

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
                            className="w-full bg-[#18b0a0] flex items-center justify-center gap-2 text-white py-3 rounded-lg font-semibold hover:bg-[#159a8b] transition-colors"
                        >
                            {activeTab === "signup" ? (loading ? "Creating account..." : "Create account") : (loading ? "Logging in..." : "Log in")}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
