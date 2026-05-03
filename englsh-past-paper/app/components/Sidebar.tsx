'use client'
import React, { useState } from 'react';
import { LayoutDashboard, Menu, X, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Importing your central data file
import { PAPER_DATA } from '../data/papers';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Dynamically creating menu items from your data
  const menuItems = Object.values(PAPER_DATA).map(paper => ({
    name: paper.id.replace(/-/g, ' ').toUpperCase(),
    href: `/${paper.id}`,
    // You can choose icons based on paper type if you want
    icon: paper.type === 'Objective' ? <BookOpen size={20} /> : <LayoutDashboard size={20} />
  }));

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-2 text-white shadow-lg transition-all hover:scale-105 lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-6 top-6 z-50 
          h-[calc(100vh-3rem)] w-72 
          rounded-2xl border border-white/20 
          bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 
          p-4 shadow-2xl backdrop-blur-sm 
          transition-all duration-300 
          ${isOpen ? 'translate-x-0' : '-translate-x-[120%]'}
          lg:translate-x-0 lg:block
        `}
      >
        {/* Branding */}
        <div className="mb-8 flex items-center gap-3 px-2">
          <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50">
            <div className="absolute inset-0 animate-pulse rounded-xl bg-white/20" />
          </div>
          <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-2xl font-black tracking-tighter text-transparent">
            BrandName
          </span>
        </div>

        {/* Dynamic Navigation */}
        <nav className="space-y-2 overflow-y-auto max-h-[calc(100vh-12rem)] custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  group relative flex items-center gap-4 overflow-hidden rounded-xl px-4 py-3 transition-all duration-300
                  ${isActive 
                    ? 'bg-white/15 text-white shadow-inner' 
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'}
                `}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <div className="absolute left-0 h-6 w-1 rounded-r-full bg-purple-500" />
                )}
                
                <span className={`relative transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-purple-400' : ''}`}>
                  {item.icon}
                </span>
                
                <span className="relative font-semibold tracking-wide text-sm">
                  {item.name}
                </span>

                {/* Animated hover background */}
                {!isActive && (
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-500/10 to-transparent transition-transform duration-500 group-hover:translate-x-0" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Version info */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <p className="mt-4 text-center text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            Data Source: local_v1
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;