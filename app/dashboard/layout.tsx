import SideBar from "@/app/components/SideBar"; 

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
     <div className="min-h-screen flex flex-row">
            <div><SideBar /></div>
            <main className="p-8 mt-16 md:mt-0 md:ml-60 w-full min-h-screen bg-[#f7fbf9]">
                <div className="max-w-7xl">
                    {children}
                </div>
            </main>
        </div>   
    )
}