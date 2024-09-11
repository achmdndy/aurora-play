import { utilsStyles } from '@/styles';
import { FlatList, FlatListProps, View } from 'react-native';
import TrackPlayer, { Track } from 'react-native-track-player';
import { TrackListItem } from './track-list-item';

export type TrackListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[];
};

const TrackListItemDivider = () => {
  return (
    <View
      style={{
        ...utilsStyles.itemSeparator,
        marginVertical: 9,
        marginLeft: 60,
      }}
    />
  );
};

export const TrackList = ({ tracks, ...flatlistProps }: TrackListProps) => {
  const handleTrackSelect = async (track: Track) => {
    await TrackPlayer.load(track);
    await TrackPlayer.play();
  };

  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{
        paddingTop: 10,
        paddingBottom: 128,
      }}
      ListFooterComponent={TrackListItemDivider}
      ItemSeparatorComponent={TrackListItemDivider}
      renderItem={({ item: track }) => (
        <TrackListItem track={track} onTrackSelect={handleTrackSelect} />
      )}
      {...flatlistProps}
    />
  );
};
