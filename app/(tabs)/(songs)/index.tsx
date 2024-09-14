import { TracksList } from '@/components/tracks-list';
import { screenPadding } from '@/constants/theme';
import { useNavigationSearch } from '@/hooks/use-navigation-search';
import { useTracks } from '@/hooks/use-tracks';
import { trackTitleFilter } from '@/lib/filter';
import { generateTracksListId } from '@/lib/utils';
import { defaultStyles } from '@/styles';
import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

export default function Songs() {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Find in songs',
    },
  });

  const tracks = useTracks();

  const filteredTracks = useMemo(() => {
    if (!search) return tracks;

    return tracks.filter(trackTitleFilter(search));
  }, [search, tracks]);

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <TracksList
          id={generateTracksListId('songs', search)}
          tracks={filteredTracks}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
}
