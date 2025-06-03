import React, { useState } from 'react';
import SongCard from '../components/SongCard';
import { songs } from '../data/songs';

type ViewType = 'list' | 'grid';

const LibraryPage: React.FC = () => {
  const [viewType, setViewType] = useState<ViewType>('list');
  
  return (
    <div className="p-6 pb-24 content-area">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Your Library</h1>
        
        {/* View Toggle */}
        <div className="flex">
          <button
            onClick={() => setViewType('list')}
            className={`px-3 py-1 rounded-l-md text-sm ${
              viewType === 'list' 
                ? 'bg-[#1DB954] text-black' 
                : 'bg-[#282828] text-gray-300'
            }`}
          >
            List
          </button>
          <button
            onClick={() => setViewType('grid')}
            className={`px-3 py-1 rounded-r-md text-sm ${
              viewType === 'grid' 
                ? 'bg-[#1DB954] text-black' 
                : 'bg-[#282828] text-gray-300'
            }`}
          >
            Grid
          </button>
        </div>
      </div>
      
      {/* Song List */}
      {viewType === 'list' ? (
        <div className="bg-[#181818] rounded-lg p-4">
          {songs.map(song => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {songs.map(song => (
            <SongCard key={song.id} song={song} variant="grid" />
          ))}
        </div>
      )}
    </div>
  );
};

export default LibraryPage;