import React from 'react';
import { Link } from 'react-router-dom';
import SongCard from '../components/SongCard';
import { songs } from '../data/songs';

const HomePage: React.FC = () => {
  // Get featured songs (first 6)
  const featuredSongs = songs.slice(0, 6);
  
  // Get recent releases (next 4)
  const recentReleases = songs.slice(6, 10);
  
  return (
    <div className="p-6 pb-24 content-area">
      {/* Hero Section */}
      <div className="mb-8 pb-6 border-b border-[#333]">
        <h1 className="text-3xl font-bold mb-2">Welcome to Zokko</h1>
        <p className="text-gray-400">Your premium destination for music streaming</p>
      </div>
      
      {/* Featured Songs */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Featured Songs</h2>
          <Link to="/library" className="text-[#1DB954] text-sm hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredSongs.map(song => (
            <SongCard key={song.id} song={song} variant="grid" />
          ))}
        </div>
      </div>
      
      {/* Recent Releases */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Recent Releases</h2>
          <Link to="/library" className="text-[#1DB954] text-sm hover:underline">
            View All
          </Link>
        </div>
        <div className="bg-[#181818] rounded-lg p-4">
          {recentReleases.map(song => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </div>
      
      {/* Get Started with Chatbot */}
      <div className="bg-gradient-to-r from-[#1DB954] to-[#169143] rounded-lg p-6 text-black">
        <h2 className="text-xl font-bold mb-2">Not sure what to listen to?</h2>
        <p className="mb-4">Tell our AI assistant how you're feeling, and we'll suggest the perfect Hindi tracks for your mood.</p>
        <Link 
          to="/chatbot" 
          className="inline-block bg-black text-white py-2 px-4 rounded-full font-medium hover:bg-opacity-80 transition-colors"
        >
          Try the Chatbot
        </Link>
      </div>
    </div>
  );
};

export default HomePage;