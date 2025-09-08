'use client';

import { MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

interface ChatButtonProps {
  providerId: string;
  variant?: 'primary' | 'secondary';
  onSendMessage?: (message: string) => void;
}

export function ChatButton({ providerId, variant = 'primary', onSendMessage }: ChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage?.(message);
      setMessage('');
      setIsOpen(false);
    }
  };

  if (variant === 'secondary') {
    return (
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-secondary flex items-center space-x-2"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Message</span>
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-primary flex items-center space-x-2"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Quick Message</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-80 glass-card p-4 rounded-lg z-10">
          <h4 className="text-white font-medium mb-3">Send Quick Message</h4>
          <div className="space-y-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full glass-card p-3 text-white rounded-lg h-20 resize-none"
            />
            <div className="flex space-x-2">
              <button
                onClick={handleSend}
                className="btn-primary flex-1 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-secondary px-4"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
