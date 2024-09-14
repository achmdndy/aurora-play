import { ArtistTracksList } from '@/components/artist-track-list';
import { screenPadding } from '@/constants/theme';
import { useArtists } from '@/hooks/use-artists';
import { defaultStyles } from '@/styles';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ArtistDetail() {
  const { name: artistName } = useLocalSearchParams<{ name: string }>();

  const artists = useArtists();

  const artist = artists.find(arts => arts.name === artistName);

  if (!artist) {
    console.warn(`Artist ${artistName} not found!`);

    return <Redirect href={'/(tabs)/artists'} />;
  }

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <ArtistTracksList artist={artist} />
      </ScrollView>
    </View>
  );
}
