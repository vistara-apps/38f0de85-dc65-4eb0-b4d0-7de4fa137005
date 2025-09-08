'use client';

import { Home, Baby, ShoppingCart, BookOpen, Users, MessageCircle, Settings2 } from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Baby, label: 'Childcare' },
  { icon: ShoppingCart, label: 'Errands' },
  { icon: BookOpen, label: 'Tutoring' },
  { icon: Users, label: 'Community' },
  { icon: MessageCircle, label: 'Messages' },
  { icon: Settings2, label: 'Settings' },
];

export function Sidebar() {
  return (
    <div className="w-64 glass-card m-4 p-4 h-fit">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">F</span>
        </div>
        <span className="text-white font-semibold text-lg">FlexiNest</span>
      </div>
      
      <nav className="space-y-2">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`sidebar-item ${
              item.active ? 'bg-white bg-opacity-20' : ''
            }`}
          >
            <item.icon className="w-5 h-5 text-white" />
            <span className="text-white text-sm">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}
