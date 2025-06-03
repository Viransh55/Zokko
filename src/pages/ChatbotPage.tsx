import React from 'react';
import { MessageSquare } from 'lucide-react';
import ChatbotModal from '../components/ChatbotModal';
import { useChatbot } from '../context/ChatbotContext';
import { songs } from '../data/songs';
import SongCard from '../components/SongCard';

const ChatbotPage: React.FC = () => {
  const { openChat } = useChatbot();
  
  // Group songs by mood
  const moodMap = songs.reduce((acc, song) => {
    if (song.mood) {
      song.mood.forEach(mood => {
        if (!acc[mood]) acc[mood] = [];
        acc[mood].push(song);
      });
    }
    return acc;
  }, {} as Record<string, typeof songs>);
  
  return (
    <div className="p-6 pb-24 content-area">
      <h1 className="text-3xl font-bold mb-6">Zokko Assistant</h1>
      
      <div className="bg-[#181818] rounded-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center mr-4">
            <MessageSquare size={24} className="text-black" />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-1">Music Recommendation Chatbot</h2>
            <p className="text-gray-400">Tell me how you feel, and I'll recommend the perfect songs for your mood</p>
          </div>
        </div>
        
        <button
          onClick={openChat}
          className="w-full bg-[#1DB954] text-black py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
        >
          Start Chatting
        </button>
      </div>
      
      {/* Mood Categories */}
      <h2 className="text-xl font-bold mb-4">Browse by Mood</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(moodMap).map(([mood, moodSongs]) => (
          <div key={mood} className="bg-[#181818] rounded-lg p-4">
            <h3 className="text-lg font-medium capitalize mb-3">{mood}</h3>
            {moodSongs.slice(0, 3).map(song => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        ))}
      </div>
      
      {/* Chatbot Modal */}
      <ChatbotModal />
    </div>
  );
};

export default ChatbotPage;