import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Song } from '../data/songs';
import { usePlayer } from '../context/PlayerContext';

interface SongCardProps {
  song: Song;
  variant?: 'grid' | 'list';
}

const SongCard: React.FC<SongCardProps> = ({ song, variant = 'list' }) => {
  const { playTrack, currentTrack, isPlaying, togglePlayPause } = usePlayer();
  
  const isCurrentSong = currentTrack?.id === song.id;
  
  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isCurrentSong) {
      togglePlayPause();
    } else {
      playTrack(song);
    }
  };
  
  if (variant === 'grid') {
    return (
      <div 
        className="bg-[#181818] rounded-md p-4 hover:bg-[#282828] transition-colors cursor-pointer group"
        onClick={() => playTrack(song)}
      >
        <div className="relative mb-4">
          <div className="aspect-square bg-[#333] rounded overflow-hidden">
            {song.coverUrl ? (
              <img 
                src={song.coverUrl} 
                alt={song.title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                No Cover
              </div>
            )}
          </div>
          <button
            className={`absolute bottom-2 right-2 w-10 h-10 rounded-full 
                      flex items-center justify-center 
                      transition-all duration-300 transform 
                      ${isCurrentSong && isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} 
                      ${isCurrentSong && isPlaying ? 'bg-[#1DB954]' : 'bg-[#1DB954]'}`}
            onClick={handlePlay}
          >
            {isCurrentSong && isPlaying ? (
              <Pause size={18} className="text-black" />
            ) : (
              <Play size={18} className="text-black ml-1" />
            )}
          </button>
        </div>
        <h3 className="font-medium text-white truncate mb-1">{song.title}</h3>
        <p className="text-sm text-gray-400">{song.artist}</p>
      </div>
    );
  }
  
  return (
    <div 
      className={`flex items-center p-3 rounded-md hover:bg-[#282828] transition-colors cursor-pointer ${
        isCurrentSong ? 'bg-[#282828]' : ''
      }`}
      onClick={() => playTrack(song)}
    >
      <div className="w-12 h-12 bg-[#333] rounded overflow-hidden flex-shrink-0">
        {song.coverUrl ? (
          <img 
            src={song.coverUrl} 
            alt={song.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
            No Cover
          </div>
        )}
      </div>
      <div className="ml-3 flex-1 min-w-0">
        <h3 className={`font-medium truncate ${isCurrentSong ? 'text-[#1DB954]' : 'text-white'}`}>
          {song.title}
        </h3>
        <p className="text-sm text-gray-400 truncate">{song.artist}</p>
      </div>
      <button 
        className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${isCurrentSong && isPlaying ? 'bg-[#1DB954]' : 'bg-transparent'}`}
        onClick={handlePlay}
      >
        {isCurrentSong && isPlaying ? (
          <Pause size={16} className={isCurrentSong && isPlaying ? 'text-black' : 'text-white'} />
        ) : (
          <Play size={16} className={isCurrentSong && isPlaying ? 'text-black' : 'text-white'} />
        )}
      </button>
    </div>
  );
};

export default SongCard;