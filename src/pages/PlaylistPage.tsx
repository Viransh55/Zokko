import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Pause } from 'lucide-react';
import { fetchPlaylistById, fetchTracksByIds } from '../api/musicApi';
import { Playlist, Track } from '../types/music';
import { usePlayer } from '../context/PlayerContext';
import TrackList from '../components/TrackList';

const PlaylistPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const {
    currentTrack,
    isPlaying,
    playTrack,
    pauseTrack,
    resumeTrack,
  } = usePlayer();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        setIsLoading(true);
        const playlistData = await fetchPlaylistById(id);

        if (playlistData) {
          setPlaylist(playlistData);

          const tracksData = await fetchTracksByIds(playlistData.trackIds);
          setTracks(tracksData);
        }
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handlePlayPlaylist = () => {
    if (tracks.length === 0) return;

    const firstTrack = tracks[0];
    const isCurrentPlaylistPlaying =
      tracks.some(track => track.id === currentTrack?.id) && isPlaying;

    if (isCurrentPlaylistPlaying) {
      pauseTrack();
    } else if (tracks.some(track => track.id === currentTrack?.id)) {
      resumeTrack();
    } else {
      playTrack(firstTrack);
    }
  };

  if (isLoading) {
    return (
      <div className="flex-1 p-8 overflow-auto">
        <div className="animate-pulse">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-64 h-64 bg-neutral-800 rounded-md"></div>
            <div className="flex-1 space-y-4 self-end">
              <div className="h-5 bg-neutral-800 rounded w-24"></div>
              <div className="h-8 bg-neutral-800 rounded w-3/4"></div>
              <div className="h-6 bg-neutral-800 rounded w-2/3"></div>
              <div className="h-12 bg-neutral-800 rounded-full w-36 mt-6"></div>
            </div>
          </div>

          <div className="space-y-4 mt-12">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 bg-neutral-800 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!playlist) {
    return (
      <div className="flex-1 p-8 overflow-auto">
        <p className="text-white">Playlist not found</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto">
      <div
        className="h-80 flex items-end"
        style={{
          background: `linear-gradient(transparent, rgba(0, 0, 0, 0.7) 70%), url(${playlist.coverUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="p-8 flex flex-col md:flex-row items-end gap-6 w-full">
          <img
            src={playlist.coverUrl}
            alt={playlist.name}
            className="w-48 h-48 object-cover shadow-lg rounded-md"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-white uppercase mb-2">Playlist</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{playlist.name}</h1>
            <p className="text-gray-300 mb-2">{playlist.description}</p>
            <div className="flex items-center text-gray-300 text-sm">
              <span>{tracks.length} songs</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-6 mb-8">
          <button
            onClick={handlePlayPlaylist}
            className="p-4 rounded-full bg-green-500 text-black hover:scale-105 transition-transform"
          >
            {tracks.some(track => track.id === currentTrack?.id) && isPlaying ? (
              <Pause size={24} />
            ) : (
              <Play size={24} className="ml-1" />
            )}
          </button>
        </div>

        <TrackList tracks={tracks} showAlbum />
      </div>
    </div>
  );
};

export default PlaylistPage;
