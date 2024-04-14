import { useEffect } from 'react';
import { Animated } from 'react-native';

const useLoop = (
  AnimatedValue: Animated.Value,
  initValue: number,
  config: Pick<
    Animated.TimingAnimationConfig,
    'toValue' | 'duration' | 'easing'
  >
) => {
  useEffect(() => {
    let stop = false;
    const action = Animated.timing(AnimatedValue, {
      toValue: config.toValue,
      duration: config.duration,
      easing: config.easing,
      useNativeDriver: true,
    });

    const loop = () => {
      if (stop) {
        return;
      }

      AnimatedValue.setValue(initValue);

      action.start(({ finished }) => {
        if (finished) {
          loop();
        }
      });
    };

    loop();

    return () => {
      stop = true;

      action.stop();
    };
  }, [
    AnimatedValue,
    initValue,
    config.duration,
    config.toValue,
    config.easing,
  ]);
};

export default useLoop;
