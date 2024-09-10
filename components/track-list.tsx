/* eslint-disable @typescript-eslint/no-explicit-any */
import { utilsStyles } from '@/styles';
import { FlatList, FlatListProps, View } from 'react-native';
import { TrackListItem } from './track-list-item';

export type TrackListProps = Partial<FlatListProps<unknown>> & {
  tracks: any[];
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
  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{
        paddingTop: 10,
        paddingBottom: 128,
      }}
      ListFooterComponent={TrackListItemDivider}
      ItemSeparatorComponent={TrackListItemDivider}
      renderItem={({ item: track }: any) => (
        <TrackListItem
          track={{
            ...track,
            image: track.artwork,
          }}
        />
      )}
      {...flatlistProps}
    />
  );
};
