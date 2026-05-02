// components/Sidebar.tsx
'use client'
import React, { useState } from 'react';
import { LayoutDashboard, Menu, X, BookOpen } from 'lucide-react'; // Added BookOpen for variety
import Link from 'next/link';

const menuItems = [
  { 
    name: 'English 2018 subject group 1', 
    icon: <LayoutDashboard size={20} />, 
    href: '/english-2018-subject-1' // This matches the [paperId]
  },
  { 
    name: 'English 2018 subject group 2', 
    icon: <BookOpen size={20} />, 
    href: '/english-2018-subject-2' 
  },
  { 
    name: 'English 2018 object group 1', 
    icon: <BookOpen size={20} />, 
    href: '/english-2018-object-1' 
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button - Same as your code */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-2 text-white shadow-lg lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Container */}
      <aside
        className={`
          fixed left-6 top-6 z-50 
          h-[calc(100vh-3rem)] w-72 
          rounded-2xl border border-white/20 
          bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 
          p-4 shadow-2xl transition-all duration-300 
          ${isOpen ? 'translate-x-0' : '-translate-x-[120%]'}
          lg:translate-x-0 lg:block
        `}
      >
        {/* Brand Name */}
        <div className="mb-8 flex items-center gap-3 px-2">
           <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500" />
           <span className="text-white text-2xl font-black">BrandName</span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href} // This points to /[paperId]
              onClick={() => setIsOpen(false)}
              className="group relative flex items-center gap-4 rounded-xl px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-all"
            >
              <span className="relative z-10">{item.icon}</span>
              <span className="relative z-10 font-semibold">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;