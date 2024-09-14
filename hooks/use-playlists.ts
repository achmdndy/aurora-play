import { unknownTrackImageUri } from '@/constants/images';
import { Playlist } from '@/types/track';
import { useLibraryStore } from './use-library-store';

export const usePlaylists = () => {
  const playlists = useLibraryStore(state => {
    return state.tracks.reduce((acc, track) => {
      track.playlist?.forEach(playlistName => {
        const existingPlaylist = acc.find(
          playlist => playlist.name === playlistName,
        );

        if (existingPlaylist) {
          existingPlaylist.tracks.push(track);
        } else {
          acc.push({
            name: playlistName,
            tracks: [track],
            artworkPreview: track.artwork ?? unknownTrackImageUri,
          });
        }
      });

      return acc;
    }, [] as Playlist[]);
  });

  const addToPlaylist = useLibraryStore(state => state.addToPlaylist);

  return { playlists, addToPlaylist };
};
