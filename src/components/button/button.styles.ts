import { StyleSheet } from 'react-native';
import { makeStyleSheetFromTheme } from '../../utils';

export const getButtonStyleSheet = makeStyleSheetFromTheme((_: Theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
    },
    touchableOpacity: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);
