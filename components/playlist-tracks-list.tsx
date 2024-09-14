import { fontSize } from '@/constants/theme';
import { useNavigationSearch } from '@/hooks/use-navigation-search';
import { trackTitleFilter } from '@/lib/filter';
import { generateTracksListId } from '@/lib/utils';
import { defaultStyles } from '@/styles';
import { Playlist } from '@/types/track';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { QueueControls } from './queue-controls';
import { TracksList } from './tracks-list';

export const PlaylistTracksList = ({ playlist }: { playlist: Playlist }) => {
  const search = useNavigationSearch({
    searchBarOptions: {
      hideWhenScrolling: true,
      placeholder: 'Find in playlist',
    },
  });

  const filteredPlaylistTracks = useMemo(() => {
    return playlist.tracks.filter(trackTitleFilter(search));
  }, [playlist.tracks, search]);

  return (
    <TracksList
      id={generateTracksListId(playlist.name, search)}
      scrollEnabled={false}
      hideQueueControls={true}
      ListHeaderComponentStyle={styles.playlistHeaderContainer}
      ListHeaderComponent={
        <View>
          <View style={styles.artworkImageContainer}>
            <FastImage
              source={{
                uri: playlist.artworkPreview,
                priority: FastImage.priority.high,
              }}
              style={styles.artworkImage}
            />
          </View>

          <Text numberOfLines={1} style={styles.playlistNameText}>
            {playlist.name}
          </Text>

          {search.length === 0 && (
            <QueueControls
              style={{ paddingTop: 24 }}
              tracks={playlist.tracks}
            />
          )}
        </View>
      }
      tracks={filteredPlaylistTracks}
    />
  );
};

const styles = StyleSheet.create({
  playlistHeaderContainer: {
    flex: 1,
    marginBottom: 32,
  },
  artworkImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 300,
  },
  artworkImage: {
    width: '85%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },
  playlistNameText: {
    ...defaultStyles.text,
    marginTop: 22,
    textAlign: 'center',
    fontSize: fontSize.lg,
    fontWeight: '800',
  },
});
