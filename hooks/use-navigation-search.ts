import { colors } from '@/constants/theme';
import { useNavigation } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { SearchBarProps } from 'react-native-screens';

const defaultSearchOptions: SearchBarProps = {
  tintColor: colors.primary,
  hideWhenScrolling: false,
};

export const useNavigationSearch = ({
  searchBarOptions,
}: {
  searchBarOptions?: SearchBarProps;
}) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState<string>('');

  const handleOnChangeText: SearchBarProps['onChangeText'] = ({
    nativeEvent: { text },
  }) => {
    setSearch(text);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        ...defaultSearchOptions,
        ...searchBarOptions,
        onChangeText: handleOnChangeText,
      },
    });
  }, [navigation, searchBarOptions]);

  return search;
};
