import { Artist, Playlist } from '@/types/track';
import { Track } from 'react-native-track-player';

export const trackTitleFilter = (title: string) => (track: Track) =>
  track.title?.toLowerCase().includes(title.toLowerCase());

export const artistNameFilter = (name: string) => (artist: Artist) =>
  artist.name.toLowerCase().includes(name.toLowerCase());

export const playlistNameFilter = (name: string) => (playlist: Playlist) =>
  playlist.name.toLowerCase().includes(name.toLowerCase());
