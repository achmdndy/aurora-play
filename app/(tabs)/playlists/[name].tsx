import { PlaylistTracksList } from '@/components/playlist-tracks-list';
import { screenPadding } from '@/constants/theme';
import { usePlaylists } from '@/hooks/use-playlists';
import { defaultStyles } from '@/styles';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { ScrollView, View } from 'react-native';

export default function Playlist() {
  const { name: playlistName } = useLocalSearchParams<{ name: string }>();

  const { playlists } = usePlaylists();

  const playlist = playlists.find(plylst => plylst.name === playlistName);

  if (!playlist) {
    console.warn(`Playlist ${playlistName} was not found!`);

    return <Redirect href={'/(tabs)/playlists'} />;
  }

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <PlaylistTracksList playlist={playlist} />
      </ScrollView>
    </View>
  );
}
