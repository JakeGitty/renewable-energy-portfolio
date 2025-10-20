'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activities = [
    { id: 0, title: 'Home', icon: '🏠', href: '/' },
    { id: 1, title: 'Activity 1', icon: '🌊', href: '/activity1' },
    { id: 2, title: 'Activity 2', icon: '🔥', href: '/activity2' },
    { id: 3, title: 'Activity 3', icon: '🌱', href: '/activity3' },
  ];

  return (
    <nav className="bg-[#0B1623] text-white shadow-lg fixed w-full z-50">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-lg font-semibold">Clean & Green Energy</h1>

        {/* Hamburger icon */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {activities.map((act) => (
            <li key={act.id}>
              <Link
                href={act.href}
                className="flex items-center gap-2 hover:text-orange-400 transition"
              >
                <span>{act.icon}</span> {act.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col md:hidden bg-[#0B1623] px-6 pb-4 transition-all duration-300">
          {activities.map((act) => (
            <li key={act.id} className="py-2 border-b border-gray-700">
              <Link
                href={act.href}
                className="flex items-center gap-2 hover:text-orange-400 transition"
                onClick={() => setIsOpen(false)}
              >
                <span>{act.icon}</span> {act.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
