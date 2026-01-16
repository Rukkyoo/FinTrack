'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, House, CreditCard, Layers, ChartNoAxesColumnIncreasing, Settings } from 'lucide-react';


const SideBar = () => {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/dashboard", icon: <House /> }, { name: "Transactions", href: "/dashboard/transactions", icon: <CreditCard /> }, { name: "Categories", href: "/dashboard/categories", icon: <Layers /> }, { name: "Analytics", href: "/dashboard/analytics", icon: <ChartNoAxesColumnIncreasing /> }, { name: "Settings", href: "/dashboard/settings", icon: <Settings /> }
    ]

    return (
        <>
            {/* Mobile Header Trigger */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#f7fbf9] px-4 h-16 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3 justify-between w-full">
                    <button
                        onClick={() => setIsMobileOpen(true)}
                        className="p-2 -ml-2 text-[var(--color-text-dark)] hover:bg-[var(--color-background-light)] rounded-lg"
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>
                    <span className="text-xs block text-[#097f6c] font-normal mt-1 uppercase tracking-widest">
                            FINTRACK
                        </span>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0  z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setIsMobileOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside className={`
                w-64 bg-white 
                fixed left-0 top-0 h-full overflow-y-auto z-50
                transition-transform duration-300 ease-in-out
                ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0
            `}>
                <div className="p-6 flex justify-between items-start">
                    <div className="flex items-center flex-col justify-center gap-2">
                        <span className="text-xs block text-[var(--color-text-gray)] font-normal mt-1 uppercase tracking-widest">
                            FINTRACK
                        </span>
                    </div>
                    {/* Close button - visible only on mobile */}
                    <button
                        onClick={() => setIsMobileOpen(false)}
                        className="p-1 md:hidden text-[var(--color-text-gray)] hover:text-[var(--color-text-dark)] rounded-lg hover:bg-[var(--color-background-light)]"
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-2 pr-7">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex gap-2 items-center px-4 py-3 text-sm font-bold rounded-lg transition-colors group ${isActive
                                    ? 'bg-[#f7fbf9] text-[#097f6c] '
                                    : 'text-[var(--color-text-gray)] hover:bg-[var(--color-background-light)] hover:text-[var(--color-text-dark)]'
                                    }`}
                            >
                               {item.icon} {item.name} 
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 ">
                    <Link
                        href="/"
                        className="flex items-center justify-center px-4 py-2 text-sm font-bold text-[var(--color-text-dark)] bg-[var(--color-background-light)] rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Back to Website
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default SideBar