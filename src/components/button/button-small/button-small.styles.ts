import { StyleSheet } from 'react-native';
import { makeStyleSheetFromTheme, generateShadow, formatSize } from 'src/utils';

export const getButtonSmallSharedStyleConfig = makeStyleSheetFromTheme(
  (theme: Theme) =>
    StyleSheet.create({
      containerStyle: {
        ...generateShadow(1, theme.text),
        height: formatSize(26),
        paddingHorizontal: formatSize(8),
        borderRadius: formatSize(17),
      },
    })
);
