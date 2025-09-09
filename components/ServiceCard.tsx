'use client';

import { Service } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  variant?: 'childcare' | 'errands' | 'tutoring' | 'home' | 'community';
  onClick?: () => void;
}

export function ServiceCard({ service, variant, onClick }: ServiceCardProps) {
  const variantStyles = {
    childcare: 'from-pink-500 to-purple-500',
    errands: 'from-blue-500 to-cyan-500',
    tutoring: 'from-green-500 to-teal-500',
    home: 'from-orange-500 to-red-500',
    community: 'from-indigo-500 to-purple-500',
  };

  return (
    <div
      className={cn(
        'service-card group cursor-pointer',
        onClick && 'hover:scale-105 transform transition-all duration-200'
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={cn(
            'w-12 h-12 rounded-lg flex items-center justify-center text-2xl bg-gradient-to-r',
            variant ? variantStyles[variant] : 'from-purple-500 to-pink-500'
          )}
        >
          {service.icon}
        </div>
        <div className="text-right">
          <div className="text-white text-lg font-semibold">
            ${service.baseRate}/hr
          </div>
          <div className="text-white text-opacity-70 text-sm">starting</div>
        </div>
      </div>
      
      <h3 className="text-white font-semibold text-lg mb-2">{service.name}</h3>
      <p className="text-white text-opacity-80 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
