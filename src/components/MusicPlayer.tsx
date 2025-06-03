import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Volume1 } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';
import { formatTime } from '../utils/formatTime';

const MusicPlayer: React.FC = () => {
  const { 
    currentTrack, 
    isPlaying, 
    volume, 
    progress, 
    duration,
    togglePlayPause,
    setVolume,
    seekTo,
    skipForward,
    skipBackward
  } = usePlayer();
  
  const [prevVolume, setPrevVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  
  useEffect(() => {
    if (volume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  }, [volume]);
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    if (newVolume > 0) {
      setPrevVolume(newVolume);
    }
  };
  
  const toggleMute = () => {
    if (isMuted) {
      setVolume(prevVolume);
      setIsMuted(false);
    } else {
      setPrevVolume(volume);
      setVolume(0);
      setIsMuted(true);
    }
  };
  
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    seekTo(value);
  };
  
  if (!currentTrack) {
    return (
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-[#181818] border-t border-[#282828] player-layer">
        <div className="h-full flex items-center justify-center text-gray-400">
          No track selected
        </div>
      </div>
    );
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-[#181818] border-t border-[#282828] px-4 flex items-center player-layer">
      {/* Track Info */}
      <div className="flex items-center w-1/4 min-w-[200px]">
        <div className="w-14 h-14 bg-[#333] rounded overflow-hidden">
          {currentTrack.coverUrl ? (
            <img 
              src={currentTrack.coverUrl} 
              alt={currentTrack.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              No Cover
            </div>
          )}
        </div>
        <div className="ml-3 min-w-0">
          <div className="text-white font-medium truncate">{currentTrack.title}</div>
          <div className="text-xs text-gray-400 truncate">{currentTrack.artist}</div>
        </div>
      </div>
      
      {/* Player Controls */}
      <div className="flex-1 flex flex-col items-center max-w-[720px] px-4">
        <div className="flex items-center mb-2">
          <button 
            onClick={() => skipBackward(10)}
            className="mx-2 text-gray-400 hover:text-white button-transition"
          >
            <SkipBack size={20} />
          </button>
          
          <button 
            onClick={togglePlayPause}
            className="bg-white rounded-full w-8 h-8 flex items-center justify-center mx-4 hover:scale-105 button-transition"
          >
            {isPlaying ? (
              <Pause size={16} className="text-black" />
            ) : (
              <Play size={16} className="text-black ml-0.5" />
            )}
          </button>
          
          <button 
            onClick={() => skipForward(10)}
            className="mx-2 text-gray-400 hover:text-white button-transition"
          >
            <SkipForward size={20} />
          </button>
        </div>
        
        <div className="w-full flex items-center">
          <span className="text-xs text-gray-400 mr-2 w-10 text-right">
            {formatTime(progress)}
          </span>
          <input
            type="range"
            min="0"
            max={duration || 100}
            step="0.1"
            value={progress}
            onChange={handleSeek}
            className="flex-1"
          />
          <span className="text-xs text-gray-400 ml-2 w-10">
            {formatTime(duration)}
          </span>
        </div>
      </div>
      
      {/* Volume Controls */}
      <div className="w-1/4 flex justify-end items-center">
        <button 
          onClick={toggleMute}
          className="text-gray-400 hover:text-white mr-2 button-transition"
        >
          {isMuted || volume === 0 ? (
            <VolumeX size={20} />
          ) : volume < 0.5 ? (
            <Volume1 size={20} />
          ) : (
            <Volume2 size={20} />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;