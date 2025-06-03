import React, { createContext, useContext, useState } from 'react';
import { songs, Song } from '../data/songs';

interface ChatMessage {
  from: 'bot' | 'user';
  text: string;
}

interface ChatbotContextType {
  history: ChatMessage[];
  sendMessage: (message: string) => void;
  isOpen: boolean;
  toggleChat: () => void;
  closeChat: () => void;
  openChat: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const ChatbotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<ChatMessage[]>([
    { from: 'bot', text: 'Hello! I am Zokko Bot. Tell me how you feel, and I\'ll recommend some songs!' }
  ]);
  const [isOpen, setIsOpen] = useState(false);
  
  const findSongsByMood = (mood: string): Song[] => {
    return songs.filter(song => 
      song.mood?.some(m => m.toLowerCase().includes(mood.toLowerCase()))
    );
  };
  
  const formatSongRecommendations = (songs: Song[]): string => {
    if (songs.length === 0) return 'Sorry, I couldn\'t find any songs matching your mood.';
    
    const recommendations = songs.slice(0, 3).map(song => 
      `• ${song.title} by ${song.artist}`
    ).join('\n');
    
    return `Here are some songs you might like:\n${recommendations}`;
  };
  
  const sendMessage = (message: string) => {
    // Add user message to history
    const userMessage: ChatMessage = { from: 'user', text: message };
    setHistory(prev => [...prev, userMessage]);
    
    // Generate bot response with a slight delay
    setTimeout(() => {
      let botResponse: string;
      let recommendedSongs: Song[] = [];
      
      // Basic emotion detection
      if (/sad|down|unhappy|depressed|lonely/i.test(message)) {
        recommendedSongs = findSongsByMood('sad');
        botResponse = `I detect you're feeling sad. ${formatSongRecommendations(recommendedSongs)}`;
      } 
      else if (/happy|joy|excited|great|good/i.test(message)) {
        recommendedSongs = findSongsByMood('happy');
        botResponse = `You're feeling happy! ${formatSongRecommendations(recommendedSongs)}`;
      }
      else if (/love|romantic|passion/i.test(message)) {
        recommendedSongs = findSongsByMood('romantic');
        botResponse = `Feeling romantic, are we? ${formatSongRecommendations(recommendedSongs)}`;
      }
      else if (/emotional|deep|moved/i.test(message)) {
        recommendedSongs = findSongsByMood('emotional');
        botResponse = `I sense you're feeling emotional. ${formatSongRecommendations(recommendedSongs)}`;
      }
      else if (/energetic|energy|pumped/i.test(message)) {
        recommendedSongs = findSongsByMood('energetic');
        botResponse = `Looking for something energetic? ${formatSongRecommendations(recommendedSongs)}`;
      }
      else if (/breakup|ex|broken/i.test(message)) {
        recommendedSongs = findSongsByMood('breakup');
        botResponse = `Going through a breakup? ${formatSongRecommendations(recommendedSongs)}`;
      }
      else {
        // Default response
        recommendedSongs = songs.slice(0, 3);
        botResponse = `I'm not sure how you feel, but here are some trending hits:\n${formatSongRecommendations(recommendedSongs)}`;
      }
      
      const botMessage: ChatMessage = { from: 'bot', text: botResponse };
      setHistory(prev => [...prev, botMessage]);
    }, 800); // Simulate typing delay
  };
  
  const toggleChat = () => setIsOpen(prev => !prev);
  const closeChat = () => setIsOpen(false);
  const openChat = () => setIsOpen(true);
  
  const value = {
    history,
    sendMessage,
    isOpen,
    toggleChat,
    closeChat,
    openChat
  };
  
  return (
    <ChatbotContext.Provider value={value}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = (): ChatbotContextType => {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};