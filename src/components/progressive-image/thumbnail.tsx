import React from 'react';
import {
  Image,
  type ColorValue,
  type StyleProp,
  type ImageStyle,
  type ImageSourcePropType,
} from 'react-native';
import FastImage, {
  type ImageStyle as FastImageStyle,
  type Source,
} from 'react-native-fast-image';
import Animated, { type SharedValue } from 'react-native-reanimated';

// @ts-expect-error FastImage does work with Animated.createAnimatedComponent
const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);
const AnimatedImage = Animated.createAnimatedComponent(Image);

type ThumbnailProps = {
  onError: () => void;
  opacity?: SharedValue<number>;
  source?: Source;
  style: StyleProp<ImageStyle>;
  tintColor?: ColorValue;
  sourceLocal?: ImageSourcePropType | undefined;
};

const Thumbnail = ({
  onError,
  opacity,
  style,
  source,
  tintColor,
  sourceLocal,
}: ThumbnailProps) => {
  if (source?.uri) {
    return (
      <AnimatedFastImage
        onError={onError}
        resizeMode="cover"
        source={source}
        style={style as StyleProp<FastImageStyle>}
        testID="progressive_image.miniPreview"
      />
    );
  }

  return (
    <AnimatedImage
      resizeMode="contain"
      onError={onError}
      source={sourceLocal}
      style={[style, { opacity: opacity?.value, tintColor }]}
      testID="progressive_image.thumbnail"
    />
  );
};

export default Thumbnail;
