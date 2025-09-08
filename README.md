# FlexiNest - Base Mini App

Your on-demand support network for working mums. A mobile app and platform connecting working mums with trusted, local help for childcare, errands, tutoring, and emotional support.

## Features

### Core Services
- **On-Demand Childcare & Errand Booking**: Quick booking of trusted local help for urgent needs
- **Home Support Service Marketplace**: Curated providers for household chores and personal services
- **Vetted Tutoring & Skill Building**: Qualified tutors and mentors for children's education
- **Community & Emotional Support Hub**: Connect with other working mothers and support professionals

### Base Mini App Integration
- Built with Next.js 15 and OnchainKit
- MiniKit integration for Farcaster frames
- Base wallet authentication
- Micro-transaction support for service payments

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base network integration
- **Wallet**: OnchainKit with MiniKit
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   # Add your OnchainKit API key
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main dashboard page
│   ├── providers.tsx      # MiniKit and OnchainKit providers
│   └── globals.css        # Global styles and design system
├── components/            # Reusable UI components
│   ├── AppShell.tsx       # Main app layout
│   ├── ServiceCard.tsx    # Service display cards
│   ├── ProviderProfile.tsx # Provider information
│   ├── BookingForm.tsx    # Service booking form
│   └── ...               # Other components
├── lib/                   # Utilities and types
│   ├── types.ts          # TypeScript interfaces
│   ├── constants.ts      # App constants and mock data
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Design System

The app uses a custom design system with:
- **Colors**: Purple/blue gradient theme with glass morphism
- **Typography**: Inter font with semantic sizing
- **Components**: Modular, reusable UI components
- **Responsive**: Mobile-first design approach
- **Animations**: Smooth transitions and micro-interactions

## Business Model

- **Micro-transactions**: Pay-per-service with tiered rates
- **Subscription options**: Premium features and priority booking
- **Community rewards**: Tokenized rewards for engagement

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
