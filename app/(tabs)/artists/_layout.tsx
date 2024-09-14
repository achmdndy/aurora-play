import { StackScreenWithSearchBar } from '@/constants/layout';
import { colors } from '@/constants/theme';
import { defaultStyles } from '@/styles';
import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function ArtistsLayout() {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ ...StackScreenWithSearchBar, headerTitle: 'Artists' }}
        />
        <Stack.Screen
          name="[name]"
          options={{
            headerTitle: '',
            headerBackVisible: true,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.primary,
          }}
        />
      </Stack>
    </View>
  );
}
