import React, { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import SongCard from '../components/SongCard';
import { songs } from '../data/songs';

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState<'all' | 'hindi' | 'english'>('all');
  const [results, setResults] = useState(songs);
  
  useEffect(() => {
    if (!query.trim() && language === 'all') {
      setResults(songs);
      return;
    }
    
    let filtered = songs;
    
    // Filter by language if not 'all'
    if (language !== 'all') {
      filtered = filtered.filter(song => song.language === language);
    }
    
    // Filter by search query if exists
    if (query.trim()) {
      filtered = filtered.filter(song => 
        song.title.toLowerCase().includes(query.toLowerCase()) || 
        song.artist.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    setResults(filtered);
  }, [query, language]);
  
  return (
    <div className="p-6 pb-24 content-area">
      <h1 className="text-3xl font-bold mb-6">Search</h1>
      
      {/* Search Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <SearchIcon size={18} />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search songs or artists..."
            className="w-full bg-[#333] text-white border-0 rounded-full py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
          />
        </div>
        
        {/* Language Filter */}
        <div className="flex rounded-full overflow-hidden bg-[#333]">
          <button
            onClick={() => setLanguage('all')}
            className={`px-4 py-2 ${language === 'all' ? 'bg-[#1DB954] text-black' : 'text-white'}`}
          >
            All
          </button>
          <button
            onClick={() => setLanguage('hindi')}
            className={`px-4 py-2 ${language === 'hindi' ? 'bg-[#1DB954] text-black' : 'text-white'}`}
          >
            Hindi
          </button>
          <button
            onClick={() => setLanguage('english')}
            className={`px-4 py-2 ${language === 'english' ? 'bg-[#1DB954] text-black' : 'text-white'}`}
          >
            English
          </button>
        </div>
      </div>
      
      {/* Results */}
      <div>
        {results.length > 0 ? (
          <>
            <h2 className="text-xl font-bold mb-4">
              {query ? `Results for "${query}"` : `${language === 'all' ? 'All' : language === 'hindi' ? 'Hindi' : 'English'} Songs`}
            </h2>
            <div className="bg-[#181818] rounded-lg p-4">
              {results.map(song => (
                <SongCard key={song.id} song={song} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 mb-2">No results found for "{query}"</p>
            <p className="text-sm text-gray-500">Try searching for something else</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;