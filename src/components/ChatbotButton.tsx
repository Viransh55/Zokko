import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useChatbot } from '../context/ChatbotContext';

const ChatbotButton: React.FC = () => {
  const { openChat } = useChatbot();
  
  return (
    <button 
      onClick={openChat}
      className="fixed bottom-24 right-6 bg-[#1DB954] text-black rounded-full w-12 h-12 
                flex items-center justify-center shadow-lg 
                hover:scale-110 transition-transform duration-200 ease-in-out
                chatbot-layer"
      aria-label="Open chat"
    >
      <MessageSquare size={20} />
    </button>
  );
};

export default ChatbotButton;