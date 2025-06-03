import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { useChatbot } from '../context/ChatbotContext';

const ChatbotModal: React.FC = () => {
  const { history, sendMessage, isOpen, closeChat } = useChatbot();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const handleSend = () => {
    if (!input.trim()) return;
    
    sendMessage(input);
    setInput('');
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 chatbot-layer">
      <div className="w-full max-w-md bg-[#111] rounded-lg shadow-xl flex flex-col fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#333]">
          <h3 className="text-white font-medium">Zokko Assistant</h3>
          <button 
            onClick={closeChat}
            className="text-gray-400 hover:text-white button-transition"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto max-h-[60vh]">
          {history.map((message, index) => (
            <div 
              key={index} 
              className={`mb-4 ${message.from === 'user' ? 'text-right' : ''}`}
            >
              <div 
                className={`inline-block max-w-[85%] px-4 py-2 rounded-lg 
                          ${message.from === 'user' 
                            ? 'bg-[#1DB954] text-black rounded-tr-none' 
                            : 'bg-[#333] text-white rounded-tl-none'}`}
              >
                <p className="whitespace-pre-line">{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        <div className="p-3 border-t border-[#333] bg-[#222]">
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tell me how you feel..."
              className="flex-1 bg-[#333] border-0 rounded-l-full py-2 px-4 text-white placeholder:text-gray-500 focus:outline-none"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className={`bg-[#1DB954] text-black rounded-r-full py-2 px-4
                        flex items-center 
                        ${!input.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'}
                        button-transition`}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;