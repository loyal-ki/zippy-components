import { formatSize, makeStyleSheetFromTheme, typography } from '@src/utils';

export const getButtonLargeStyleConfig = makeStyleSheetFromTheme(
  (theme: Theme) => ({
    titleStyle: {
      ...typography.text16Bold,
    },
    containerStyle: {
      height: formatSize(56),
      borderRadius: formatSize(8),
    },
    iconStyle: {
      size: formatSize(16),
      marginRight: formatSize(2),
    },
    activeColorConfig: {
      titleColor: theme.text,
      backgroundColor: theme.primary,
    },
    disabledColorConfig: {
      titleColor: theme.text,
      backgroundColor: theme.grey,
    },
  })
);
