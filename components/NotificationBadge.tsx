'use client';

import { Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NotificationBadgeProps {
  count: number;
  variant?: 'default';
  onClick?: () => void;
}

export function NotificationBadge({ count, variant = 'default', onClick }: NotificationBadgeProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'relative glass-card p-2 rounded-full hover:bg-opacity-20 transition-all duration-200',
        count > 0 && 'animate-pulse'
      )}
    >
      <Bell className="w-5 h-5 text-white" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
          {count > 9 ? '9+' : count}
        </span>
      )}
    </button>
  );
}
