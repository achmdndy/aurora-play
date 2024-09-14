import { useLibraryStore } from './use-library-store';

export const useTracks = () => useLibraryStore(state => state.tracks);
