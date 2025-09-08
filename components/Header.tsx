'use client';

import { Search, Bell, User } from 'lucide-react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name } from '@coinbase/onchainkit/identity';

export function Header() {
  return (
    <header className="p-6 pb-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-4xl font-bold text-white">FlexiNest</h1>
          <div className="glass-card px-4 py-2 rounded-full">
            <span className="text-white text-sm">Service & category</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="glass-card pl-10 pr-4 py-2 text-white placeholder-white placeholder-opacity-70 rounded-full w-64"
            />
          </div>
          
          <button className="glass-card p-2 rounded-full hover:bg-opacity-20 transition-all duration-200">
            <Bell className="w-5 h-5 text-white" />
          </button>
          
          <Wallet>
            <ConnectWallet>
              <div className="glass-card px-4 py-2 rounded-full flex items-center space-x-2">
                <User className="w-4 h-4 text-white" />
                <Name className="text-white text-sm" />
              </div>
            </ConnectWallet>
          </Wallet>
        </div>
      </div>
    </header>
  );
}
