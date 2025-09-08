import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FlexiNest - Your on-demand support network for working mums',
  description: 'A mobile app and platform connecting working mums with trusted, local help for childcare, errands, tutoring, and emotional support.',
  keywords: ['childcare', 'working mothers', 'support network', 'base miniapp'],
  openGraph: {
    title: 'FlexiNest',
    description: 'Your on-demand support network for working mums',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
