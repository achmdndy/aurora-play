import { TrackList } from '@/components/track-list';
import { screenPadding } from '@/constants/theme';
import library from '@/dummy/library.json';
import { useNavigationSearch } from '@/hooks/use-navigation-search';
import { trackTitleFilter } from '@/lib/filter';
import { defaultStyles } from '@/styles';
import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

export default function Songs() {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Find in Songs',
    },
  });

  const filterSongs = useMemo(() => {
    if (!search) return library;

    return library.filter(trackTitleFilter(search));
  }, [search]);

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <TrackList tracks={filterSongs} scrollEnabled={false} />
      </ScrollView>
    </View>
  );
}
