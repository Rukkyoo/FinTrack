import React from 'react'
import { Plus, CircleArrowDown, CircleArrowUp, Wallet, MoveUpRight, MoveDownLeft } from 'lucide-react'
import SpendingChart from '../components/SpendingChart'
import RecentTransactions from '../components/RecentTransactions'
import TopCategories from '../components/TopCategories'

const Dashboard = () => {
  return (
    <div>
      <header className='flex justify-between pb-5 items-center border-b border-black'>
        <div>
          <h1 className='text-lg font-bold mb-3'>Dashboard</h1>
          <p className='text-sm text-gray-500'>Welcome back, Jean!</p>
        </div>
        <div className='flex items-center gap-2'>
          <button className='flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-[#18b0a0] cursor-pointer rounded-lg hover:bg-[#18b0a0]/80 transition-colors'><Plus />Add Transaction</button>
        </div>
      </header>

      {/* Expense Section */}
      <section>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
          <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
            <div className='flex items-center gap-2'>
              <h3 className='text-sm font-bold text-gray-500'>Total Income</h3>
              <CircleArrowDown size={26} className='text-green-500 bg-[#e8f8f5] p-1 rounded-md' />
            </div>
            <p className='text-2xl font-bold text-gray-900'>₦4,250.00</p>
            <span className='flex flex-row items-center gap-2 mt-5 text-sm text-green-500 font-semibold'><MoveUpRight size={16} className='text-green-500' />+12% from last month</span>
          </div>
          <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
            <div className='flex items-center gap-2'>
              <h3 className='text-sm font-bold text-gray-500'>Total Expenses</h3>
              <CircleArrowUp size={26} className='text-red-500 bg-[#e8f8f5] p-1 rounded-md' />
            </div>
            <p className='text-2xl font-bold text-gray-900'>₦1,250.00</p>
            <span className='flex flex-row items-center gap-2 mt-5 text-sm text-red-500 font-semibold'><MoveDownLeft size={16} className='text-red-500' />-4.1% from last month</span>
          </div>
          <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
            <div className='flex items-center gap-2'>
              <h3 className='text-sm font-bold text-gray-500'>Balance</h3>
              <Wallet size={26} className='text-black bg-[#e8f8f5] p-1 rounded-md' />
            </div>
            <p className='text-2xl font-bold text-gray-900'>₦12,000.00</p>
            <span className='flex flex-row items-center gap-2 mt-5 text-sm text-green-500 font-semibold'><MoveUpRight size={16} className='text-green-500' />+2.5% from last month</span>
          </div>
        </div>
      </section>

      {/* Category Section */}
      {/* Category and Recent Transactions Section */}
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <SpendingChart />
        <RecentTransactions />
      </section>

      {/* Top Categories Section */}
      <section className='mt-20'>
        <TopCategories />
      </section>
    </div>
  )
}

export default Dashboard