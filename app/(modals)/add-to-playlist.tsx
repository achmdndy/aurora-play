import { PlaylistsList } from '@/components/playlists-list';
import { screenPadding } from '@/constants/theme';
import { usePlaylists } from '@/hooks/use-playlists';
import { useQueue } from '@/hooks/use-queue';
import { useTracks } from '@/hooks/use-tracks';
import { defaultStyles } from '@/styles';
import { Playlist } from '@/types/track';
import { useHeaderHeight } from '@react-navigation/elements';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TrackPlayer, { Track } from 'react-native-track-player';

export default function AddToPlaylistModal() {
  const router = useRouter();
  const headerHeight = useHeaderHeight();

  const { activeQueueId } = useQueue();

  const { trackUrl } = useLocalSearchParams<{ trackUrl: Track['url'] }>();

  const tracks = useTracks();

  const { playlists, addToPlaylist } = usePlaylists();

  const track = tracks.find(currentTrack => trackUrl === currentTrack.url);

  // track was not found
  if (!track) {
    return null;
  }

  const availablePlaylists = playlists.filter(
    playlist =>
      !playlist.tracks.some(playlistTrack => playlistTrack.url === track.url),
  );

  const handlePlaylistPress = async (playlist: Playlist) => {
    addToPlaylist(track, playlist.name);

    // should close the modal
    router.dismiss();

    // if the current queue is the playlist we're adding to, add the track at the end of the queue
    if (activeQueueId?.startsWith(playlist.name)) {
      await TrackPlayer.add(track);
    }
  };

  return (
    <SafeAreaView style={[styles.modalContainer, { paddingTop: headerHeight }]}>
      <PlaylistsList
        playlists={availablePlaylists}
        onPlaylistPress={handlePlaylistPress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    ...defaultStyles.container,
    paddingHorizontal: screenPadding.horizontal,
  },
});
