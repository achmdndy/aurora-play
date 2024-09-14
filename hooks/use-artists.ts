import { Artist } from '@/types/track';
import { useLibraryStore } from './use-library-store';

export const useArtists = () =>
  useLibraryStore(state => {
    return state.tracks.reduce((acc, track) => {
      const existingArtist = acc.find(artist => artist.name === track.artist);

      if (existingArtist) {
        existingArtist.tracks.push(track);
      } else {
        acc.push({
          name: track.artist ?? 'Unknown',
          tracks: [track],
        });
      }

      return acc;
    }, [] as Artist[]);
  });
