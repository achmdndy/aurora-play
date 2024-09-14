import { PlaylistsList } from '@/components/playlists-list';
import { screenPadding } from '@/constants/theme';
import { useNavigationSearch } from '@/hooks/use-navigation-search';
import { usePlaylists } from '@/hooks/use-playlists';
import { playlistNameFilter } from '@/lib/filter';
import { defaultStyles } from '@/styles';
import { Playlist } from '@/types/track';
import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

export default function Playlists() {
  const router = useRouter();

  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Find in playlists',
    },
  });

  const { playlists } = usePlaylists();

  const filteredPlaylists = useMemo(() => {
    return playlists.filter(playlistNameFilter(search));
  }, [playlists, search]);

  const handlePlaylistPress = (playlist: Playlist) => {
    router.push(`/(tabs)/playlists/${playlist.name}`);
  };

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          paddingHorizontal: screenPadding.horizontal,
        }}
      >
        <PlaylistsList
          scrollEnabled={false}
          playlists={filteredPlaylists}
          onPlaylistPress={handlePlaylistPress}
        />
      </ScrollView>
    </View>
  );
}
