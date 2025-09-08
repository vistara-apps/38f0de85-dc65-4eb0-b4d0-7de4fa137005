'use client';

import { Provider } from '@/lib/types';
import { Star, Shield, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProviderProfileProps {
  provider: Provider;
  variant?: 'detailed' | 'compact';
  onBook?: () => void;
}

export function ProviderProfile({ provider, variant = 'compact', onBook }: ProviderProfileProps) {
  if (variant === 'compact') {
    return (
      <div className="glass-card p-4 hover:bg-opacity-15 transition-all duration-200">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">
              {provider.userId.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h4 className="text-white font-medium">{provider.userId}</h4>
              {provider.backgroundCheckStatus === 'verified' && (
                <Shield className="w-4 h-4 text-green-400" />
              )}
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white text-sm">{provider.rating}</span>
              <span className="text-white text-opacity-60 text-sm">
                ({provider.reviewCount} reviews)
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white font-semibold">${provider.hourlyRate}/hr</div>
          </div>
        </div>
        
        <p className="text-white text-opacity-80 text-sm mb-3 line-clamp-2">
          {provider.bio}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-white text-opacity-60" />
            <span className="text-white text-opacity-60 text-sm">
              {provider.availability.join(', ')}
            </span>
          </div>
          
          {onBook && (
            <button
              onClick={onBook}
              className="btn-primary text-sm px-4 py-2"
            >
              Book Now
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">
            {provider.userId.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-white text-xl font-semibold">{provider.userId}</h3>
            {provider.backgroundCheckStatus === 'verified' && (
              <Shield className="w-5 h-5 text-green-400" />
            )}
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-white font-medium">{provider.rating}</span>
            </div>
            <span className="text-white text-opacity-60">
              ({provider.reviewCount} reviews)
            </span>
          </div>
          <div className="text-white text-2xl font-bold">${provider.hourlyRate}/hr</div>
        </div>
      </div>
      
      <p className="text-white text-opacity-90 mb-6 leading-relaxed">
        {provider.bio}
      </p>
      
      <div className="mb-6">
        <h4 className="text-white font-medium mb-3">Services Offered</h4>
        <div className="flex flex-wrap gap-2">
          {provider.servicesOffered.map((service, index) => (
            <span
              key={index}
              className="glass-card px-3 py-1 text-white text-sm rounded-full"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-white font-medium mb-3">Availability</h4>
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4 text-white text-opacity-60" />
          <span className="text-white text-opacity-80">
            {provider.availability.join(', ')}
          </span>
        </div>
      </div>
      
      {onBook && (
        <button
          onClick={onBook}
          className="btn-primary w-full"
        >
          Book This Provider
        </button>
      )}
    </div>
  );
}
