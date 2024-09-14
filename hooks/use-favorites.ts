import { useLibraryStore } from './use-library-store';

export const useFavorites = () => {
  const favorites = useLibraryStore(state =>
    state.tracks.filter(track => track.rating === 1),
  );
  const toggleTrackFavorite = useLibraryStore(
    state => state.toggleTrackFavorite,
  );

  return {
    favorites,
    toggleTrackFavorite,
  };
};
