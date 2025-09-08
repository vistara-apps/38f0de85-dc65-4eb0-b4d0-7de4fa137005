'use client';

import { STATS } from '@/lib/constants';
import { TrendingUp, Users, Star, Clock } from 'lucide-react';

const statsData = [
  {
    label: 'Support Groups',
    value: STATS.supportGroups.toLocaleString(),
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    label: 'Local Providers',
    value: STATS.localProviders.toLocaleString(),
    icon: TrendingUp,
    color: 'from-green-500 to-teal-500',
  },
  {
    label: 'Support Providers',
    value: STATS.supportProviders.toString(),
    icon: Star,
    color: 'from-purple-500 to-pink-500',
  },
  {
    label: 'Local Experts',
    value: STATS.localExperts.toLocaleString(),
    icon: Clock,
    color: 'from-orange-500 to-red-500',
  },
  {
    label: 'Families',
    value: STATS.families.toString(),
    icon: Users,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    label: 'Satisfaction',
    value: `${STATS.satisfaction}/5`,
    icon: Star,
    color: 'from-yellow-500 to-orange-500',
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {statsData.map((stat, index) => (
        <div key={index} className="metric-card">
          <div className="flex items-center justify-between mb-3">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r ${stat.color}`}
            >
              <stat.icon className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="text-white text-2xl font-bold mb-1">{stat.value}</div>
          <div className="text-white text-opacity-70 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
