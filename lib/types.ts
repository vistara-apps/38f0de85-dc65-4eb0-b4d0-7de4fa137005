export interface User {
  userId: string;
  name: string;
  email: string;
  role: 'mum' | 'provider';
  location: string;
  paymentInfo?: string;
  ratingsReceived: number[];
}

export interface Provider {
  providerId: string;
  userId: string;
  servicesOffered: ServiceType[];
  availability: string[];
  backgroundCheckStatus: 'verified' | 'pending' | 'failed';
  hourlyRate: number;
  rating: number;
  reviewCount: number;
  bio: string;
  profileImage?: string;
}

export interface Booking {
  bookingId: string;
  userId: string;
  providerId: string;
  serviceType: ServiceType;
  dateTime: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price: number;
  notes?: string;
}

export interface Service {
  serviceId: string;
  name: string;
  description: string;
  baseRate: number;
  category: ServiceType;
  icon: string;
}

export type ServiceType = 'childcare' | 'errands' | 'tutoring' | 'home' | 'community';

export interface CommunityPost {
  postId: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: string;
  replies: CommunityReply[];
  likes: number;
}

export interface CommunityReply {
  replyId: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'booking_confirmed' | 'booking_declined' | 'new_message' | 'reminder';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}
