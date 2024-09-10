import { defaultStyles } from '@/styles';
import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function PlaylistsLayout() {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: 'Playlists' }} />
      </Stack>
    </View>
  );
}
