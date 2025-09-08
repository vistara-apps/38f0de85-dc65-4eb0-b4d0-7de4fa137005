import { Service, Provider } from './types';

export const SERVICES: Service[] = [
  {
    serviceId: '1',
    name: 'Childcare',
    description: 'Trusted babysitting and childcare services',
    baseRate: 25,
    category: 'childcare',
    icon: '👶',
  },
  {
    serviceId: '2',
    name: 'Errands',
    description: 'Grocery shopping, pickups, and daily tasks',
    baseRate: 20,
    category: 'errands',
    icon: '🛒',
  },
  {
    serviceId: '3',
    name: 'Tutoring',
    description: 'Educational support and skill building',
    baseRate: 35,
    category: 'tutoring',
    icon: '📚',
  },
  {
    serviceId: '4',
    name: 'Home Support',
    description: 'Cleaning, meal prep, and household tasks',
    baseRate: 30,
    category: 'home',
    icon: '🏠',
  },
];

export const MOCK_PROVIDERS: Provider[] = [
  {
    providerId: '1',
    userId: 'provider1',
    servicesOffered: ['childcare'],
    availability: ['weekdays', 'evenings'],
    backgroundCheckStatus: 'verified',
    hourlyRate: 25,
    rating: 4.8,
    reviewCount: 127,
    bio: 'Experienced childcare provider with 8+ years working with children aged 2-12.',
    profileImage: '/api/placeholder/64/64',
  },
  {
    providerId: '2',
    userId: 'provider2',
    servicesOffered: ['errands', 'home'],
    availability: ['weekdays', 'weekends'],
    backgroundCheckStatus: 'verified',
    hourlyRate: 22,
    rating: 4.9,
    reviewCount: 89,
    bio: 'Reliable helper for busy families. Specializing in grocery runs and light housework.',
    profileImage: '/api/placeholder/64/64',
  },
  {
    providerId: '3',
    userId: 'provider3',
    servicesOffered: ['tutoring'],
    availability: ['afternoons', 'evenings'],
    backgroundCheckStatus: 'verified',
    hourlyRate: 40,
    rating: 4.7,
    reviewCount: 156,
    bio: 'Certified teacher with expertise in math and science for grades K-8.',
    profileImage: '/api/placeholder/64/64',
  },
];

export const STATS = {
  supportGroups: 6000,
  localProviders: 155000,
  supportProviders: 41,
  localExperts: 14000,
  families: 127,
  satisfaction: 6.4,
};
