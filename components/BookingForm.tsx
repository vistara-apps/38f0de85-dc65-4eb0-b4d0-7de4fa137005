'use client';

import { useState } from 'react';
import { Calendar, Clock, MessageSquare } from 'lucide-react';
import { ServiceType } from '@/lib/types';

interface BookingFormProps {
  serviceType: ServiceType;
  providerId: string;
  hourlyRate: number;
  variant?: 'simple' | 'detailed';
  onSubmit?: (bookingData: any) => void;
}

export function BookingForm({ 
  serviceType, 
  providerId, 
  hourlyRate, 
  variant = 'simple',
  onSubmit 
}: BookingFormProps) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    duration: '2',
    notes: '',
    urgency: 'normal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingData = {
      ...formData,
      serviceType,
      providerId,
      totalCost: parseFloat(formData.duration) * hourlyRate,
    };
    onSubmit?.(bookingData);
  };

  const totalCost = parseFloat(formData.duration) * hourlyRate;

  return (
    <div className="glass-card p-6">
      <h3 className="text-white text-xl font-semibold mb-6">Book Service</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full glass-card p-3 text-white rounded-lg"
              required
            />
          </div>
          
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              Time
            </label>
            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full glass-card p-3 text-white rounded-lg"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Duration (hours)
          </label>
          <select
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            className="w-full glass-card p-3 text-white rounded-lg"
          >
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4 hours</option>
            <option value="6">6 hours</option>
            <option value="8">8 hours</option>
          </select>
        </div>
        
        {variant === 'detailed' && (
          <>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Urgency
              </label>
              <select
                value={formData.urgency}
                onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                className="w-full glass-card p-3 text-white rounded-lg"
              >
                <option value="normal">Normal</option>
                <option value="urgent">Urgent (+20%)</option>
                <option value="emergency">Emergency (+50%)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Special Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any special requirements or notes..."
                className="w-full glass-card p-3 text-white rounded-lg h-24 resize-none"
              />
            </div>
          </>
        )}
        
        <div className="glass-card p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white text-opacity-80">Base Rate:</span>
            <span className="text-white">${hourlyRate}/hr</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-white text-opacity-80">Duration:</span>
            <span className="text-white">{formData.duration} hours</span>
          </div>
          {formData.urgency !== 'normal' && (
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-opacity-80">Urgency Fee:</span>
              <span className="text-white">
                +{formData.urgency === 'urgent' ? '20%' : '50%'}
              </span>
            </div>
          )}
          <hr className="border-white border-opacity-20 my-2" />
          <div className="flex justify-between items-center">
            <span className="text-white font-semibold">Total:</span>
            <span className="text-white font-bold text-lg">
              ${totalCost.toFixed(2)}
            </span>
          </div>
        </div>
        
        <button
          type="submit"
          className="btn-primary w-full"
        >
          Request Booking
        </button>
      </form>
    </div>
  );
}
