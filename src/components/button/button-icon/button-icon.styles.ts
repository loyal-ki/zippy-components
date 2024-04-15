import { StyleSheet } from 'react-native';
import { makeStyleSheetFromTheme, changeOpacity } from 'src/utils';

export const getButtonIconStyleConfig = makeStyleSheetFromTheme(
  (theme: Theme) =>
    StyleSheet.create({
      container: {
        height: 70,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: changeOpacity(theme.primary, 0.08),
      },
    })
);
