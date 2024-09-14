import { useCallback, useEffect, useState } from 'react';
import TrackPlayer, { RepeatMode } from 'react-native-track-player';

export const useTrackPlayerRepeatMode = () => {
  const [repeatMode, setRepeatMode] = useState<RepeatMode>();

  const changeRepeatMode = useCallback(async (rM: RepeatMode) => {
    await TrackPlayer.setRepeatMode(rM);

    setRepeatMode(rM);
  }, []);

  useEffect(() => {
    TrackPlayer.getRepeatMode().then(setRepeatMode);
  }, []);

  return { repeatMode, changeRepeatMode };
};
