import { TracksList } from '@/components/tracks-list';
import { screenPadding } from '@/constants/theme';
import { useFavorites } from '@/hooks/use-favorites';
import { useNavigationSearch } from '@/hooks/use-navigation-search';
import { trackTitleFilter } from '@/lib/filter';
import { generateTracksListId } from '@/lib/utils';
import { defaultStyles } from '@/styles';
import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

export default function Favorites() {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Find in songs',
    },
  });

  const favoritesTracks = useFavorites().favorites;

  const filteredFavoritesTracks = useMemo(() => {
    if (!search) return favoritesTracks;

    return favoritesTracks.filter(trackTitleFilter(search));
  }, [search, favoritesTracks]);

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        style={{ paddingHorizontal: screenPadding.horizontal }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <TracksList
          id={generateTracksListId('favorites', search)}
          scrollEnabled={false}
          tracks={filteredFavoritesTracks}
        />
      </ScrollView>
    </View>
  );
}
