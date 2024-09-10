import unknownArtistImage from '@/assets/images/unknown-artist.png';
import unknownTrackImage from '@/assets/images/unknown-track.png';
import { Image } from 'react-native';

export const unknownTrackImageUri =
  Image.resolveAssetSource(unknownTrackImage).uri;
export const unknownArtistImageUri =
  Image.resolveAssetSource(unknownArtistImage).uri;
