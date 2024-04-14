import React from 'react';
import {
  createContext,
  type FunctionComponent,
  type PropsWithChildren,
  useContext,
} from 'react';
import { type StyleProp, StyleSheet, View, type ViewStyle } from 'react-native';
import { useTheme } from '../themes/theme-context';
import useModal from '@src/hooks/use-modal';
import Loading from '@src/components/loading/loading';

type OverlayComponentProps = FunctionComponent<
  PropsWithChildren<{ style?: StyleProp<ViewStyle> }>
>;

export type ScreenLoadingProps = {
  isOpen: boolean;
  onVisible: () => void;
  onHidden: () => void;
  OverlayComponent: OverlayComponentProps;
  LoadingComponent: FunctionComponent;
};

const ScreenLoadingContext = createContext<
  Pick<ScreenLoadingProps, 'isOpen' | 'onHidden' | 'onVisible'>
>({
  isOpen: false,
  onVisible: () => {},
  onHidden: () => {},
});

const DummyOverlay: OverlayComponentProps = (props) => <View {...props} />;

const DummyLoadingComponent: FunctionComponent = (props) => {
  const { theme } = useTheme();

  return (
    <View
      style={StyleSheet.flatten([
        styles.content,
        { backgroundColor: theme.background, zIndex: 9999 },
      ])}
      {...props}
    >
      <Loading color={theme.text} type="circular" />
    </View>
  );
};

export type ScreenLoadingProviderProps = Partial<
  Pick<ScreenLoadingProps, 'LoadingComponent' | 'OverlayComponent'>
> & {
  initialIsOpen?: boolean;
};

export function ScreenLoadingProvider({
  children,
  initialIsOpen,
  OverlayComponent = DummyOverlay,
  LoadingComponent = DummyLoadingComponent,
}: PropsWithChildren<ScreenLoadingProviderProps>) {
  const { theme } = useTheme();
  const [isOpen, _, { onVisible, onHidden }] = useModal(initialIsOpen);

  return (
    <ScreenLoadingContext.Provider
      value={{
        isOpen,
        onHidden,
        onVisible,
      }}
    >
      {isOpen && (
        <View style={styles.wrapper}>
          <OverlayComponent
            style={StyleSheet.flatten([
              styles.overlay,
              { zIndex: 9999, backgroundColor: theme.background },
            ])}
          />
          <LoadingComponent />
        </View>
      )}
      {children}
    </ScreenLoadingContext.Provider>
  );
}

export function useScreenLoading() {
  return useContext(ScreenLoadingContext);
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
  },
  overlay: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    opacity: 0.5,
  },
  content: {
    alignItems: 'center',
    gap: 10,
    padding: 20,
    borderRadius: 10,
  },
});
