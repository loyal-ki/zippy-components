import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { ImageStyle as FIImageStyle } from 'react-native-fast-image';

type Intersection<T1, T2> = Omit<
  Omit<T1 & T2, keyof Omit<T1, keyof T2>>,
  keyof Omit<T2, keyof T1>
>;

export type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};
export type ImageStyles = Intersection<ImageStyle, FIImageStyle>;
