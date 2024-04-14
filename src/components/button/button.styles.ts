import { StyleSheet } from 'react-native';

import { makeStyleSheetFromTheme } from '@utils/theme';

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
