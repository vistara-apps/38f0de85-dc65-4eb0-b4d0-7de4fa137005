'use client';

import { useEffect, useState } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { AppShell } from '@/components/AppShell';
import { ServiceCard } from '@/components/ServiceCard';
import { ProviderProfile } from '@/components/ProviderProfile';
import { BookingForm } from '@/components/BookingForm';
import { StatsGrid } from '@/components/StatsGrid';
import { ServiceMetrics } from '@/components/ServiceMetrics';
import { ChatButton } from '@/components/ChatButton';
import { NotificationBadge } from '@/components/NotificationBadge';
import { SERVICES, MOCK_PROVIDERS } from '@/lib/constants';
import { ServiceType, Provider } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

export default function HomePage() {
  const { setFrameReady } = useMiniKit();
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [notifications, setNotifications] = useState(3);

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  const handleServiceSelect = (serviceType: ServiceType) => {
    setSelectedService(serviceType);
    setSelectedProvider(null);
    setShowBookingForm(false);
  };

  const handleProviderSelect = (provider: Provider) => {
    setSelectedProvider(provider);
    setShowBookingForm(false);
  };

  const handleBookProvider = (provider: Provider) => {
    setSelectedProvider(provider);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (bookingData: any) => {
    console.log('Booking submitted:', bookingData);
    // Here you would typically send the booking to your API
    alert(`Booking request sent! Total cost: ${formatCurrency(bookingData.totalCost)}`);
    setShowBookingForm(false);
    setSelectedProvider(null);
    setSelectedService(null);
  };

  const handleSendMessage = (message: string) => {
    console.log('Message sent:', message);
    alert('Message sent to provider!');
  };

  const filteredProviders = selectedService 
    ? MOCK_PROVIDERS.filter(provider => 
        provider.servicesOffered.includes(selectedService)
      )
    : MOCK_PROVIDERS;

  return (
    <AppShell variant="withNav">
      <div className="space-y-6">
        {/* Top Section with Stats and Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="glass-card p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white text-2xl font-bold">Dashboard Overview</h2>
                <NotificationBadge 
                  count={notifications} 
                  onClick={() => setNotifications(0)}
                />
              </div>
              <StatsGrid />
            </div>
            
            <ServiceMetrics />
          </div>
          
          <div className="space-y-4">
            <div className="glass-card p-6">
              <h3 className="text-white text-lg font-semibold mb-4">Local Category</h3>
              <div className="text-white text-3xl font-bold mb-2">$1,802</div>
              <div className="text-white text-opacity-70 text-sm mb-4">Monthly earnings</div>
              
              {/* Simple earnings chart */}
              <div className="h-20 flex items-end space-x-1 mb-4">
                {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 65, 80].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-purple-400 to-pink-400 rounded-sm"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-white text-opacity-60">Jan</span>
                <span className="text-white text-opacity-60">Dec</span>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-white text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { name: 'Sarah M.', action: 'Booked childcare', time: '2h ago' },
                  { name: 'Emma K.', action: 'Requested tutoring', time: '4h ago' },
                  { name: 'Lisa P.', action: 'Completed errands', time: '6h ago' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">
                        {activity.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">{activity.name}</div>
                      <div className="text-white text-opacity-60 text-xs">{activity.action}</div>
                    </div>
                    <div className="text-white text-opacity-60 text-xs">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="glass-card p-6">
          <h2 className="text-white text-2xl font-bold mb-6">Available Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.serviceId}
                service={service}
                variant={service.category}
                onClick={() => handleServiceSelect(service.category)}
              />
            ))}
          </div>
        </div>

        {/* Providers Section */}
        {selectedService && (
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-2xl font-bold">
                Available {selectedService.charAt(0).toUpperCase() + selectedService.slice(1)} Providers
              </h2>
              <button
                onClick={() => setSelectedService(null)}
                className="btn-secondary"
              >
                Back to Services
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredProviders.map((provider) => (
                <div key={provider.providerId} className="space-y-4">
                  <ProviderProfile
                    provider={provider}
                    variant="compact"
                    onBook={() => handleBookProvider(provider)}
                  />
                  <div className="flex space-x-2">
                    <ChatButton
                      providerId={provider.providerId}
                      variant="secondary"
                      onSendMessage={handleSendMessage}
                    />
                    <button
                      onClick={() => handleProviderSelect(provider)}
                      className="btn-secondary flex-1"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Provider Details */}
        {selectedProvider && !showBookingForm && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProviderProfile
              provider={selectedProvider}
              variant="detailed"
              onBook={() => setShowBookingForm(true)}
            />
            <div className="space-y-4">
              <div className="glass-card p-6">
                <h3 className="text-white text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setShowBookingForm(true)}
                    className="btn-primary w-full"
                  >
                    Book This Provider
                  </button>
                  <ChatButton
                    providerId={selectedProvider.providerId}
                    variant="primary"
                    onSendMessage={handleSendMessage}
                  />
                  <button
                    onClick={() => setSelectedProvider(null)}
                    className="btn-secondary w-full"
                  >
                    Back to Providers
                  </button>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-white text-lg font-semibold mb-4">Recent Reviews</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Jennifer M.', rating: 5, comment: 'Excellent service! Very reliable and great with kids.' },
                    { name: 'Amanda K.', rating: 5, comment: 'Professional and punctual. Highly recommend!' },
                    { name: 'Rachel S.', rating: 4, comment: 'Good experience overall. Would book again.' },
                  ].map((review, i) => (
                    <div key={i} className="border-b border-white border-opacity-10 pb-3 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{review.name}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, j) => (
                            <div
                              key={j}
                              className={`w-3 h-3 rounded-full ${
                                j < review.rating ? 'bg-yellow-400' : 'bg-white bg-opacity-20'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-white text-opacity-80 text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Booking Form */}
        {showBookingForm && selectedProvider && selectedService && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BookingForm
              serviceType={selectedService}
              providerId={selectedProvider.providerId}
              hourlyRate={selectedProvider.hourlyRate}
              variant="detailed"
              onSubmit={handleBookingSubmit}
            />
            <div className="space-y-4">
              <ProviderProfile
                provider={selectedProvider}
                variant="compact"
              />
              <div className="glass-card p-6">
                <h3 className="text-white text-lg font-semibold mb-4">Booking Summary</h3>
                <div className="space-y-2 text-white text-opacity-80">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="capitalize">{selectedService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Provider:</span>
                    <span>{selectedProvider.userId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rate:</span>
                    <span>${selectedProvider.hourlyRate}/hr</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="btn-secondary w-full mt-4"
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
