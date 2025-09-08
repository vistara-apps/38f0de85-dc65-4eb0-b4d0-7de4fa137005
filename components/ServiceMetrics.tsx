'use client';

import { TrendingUp, DollarSign, Clock } from 'lucide-react';

const metricsData = [
  {
    title: 'Service Demand',
    value: '512',
    subtitle: 'This Month',
    trend: '+12%',
    icon: TrendingUp,
  },
  {
    title: 'Avg. Rate',
    value: '$30,500',
    subtitle: 'Per Month',
    rating: 4.8,
    icon: DollarSign,
  },
];

export function ServiceMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {metricsData.map((metric, index) => (
        <div key={index} className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-medium">{metric.title}</h3>
            <metric.icon className="w-5 h-5 text-white text-opacity-60" />
          </div>
          
          <div className="mb-2">
            <div className="text-white text-3xl font-bold">{metric.value}</div>
            {metric.trend && (
              <div className="text-green-400 text-sm font-medium">{metric.trend}</div>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-white text-opacity-70 text-sm">{metric.subtitle}</span>
            {metric.rating && (
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i < Math.floor(metric.rating) 
                        ? 'bg-yellow-400' 
                        : 'bg-white bg-opacity-20'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Simple chart visualization */}
          <div className="mt-4 h-16 flex items-end space-x-1">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-sm opacity-60"
                style={{ height: `${Math.random() * 100}%` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
