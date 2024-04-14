import { formatSize, makeStyleSheetFromTheme } from '@src/utils';

export const getButtonMediumStyleConfig = makeStyleSheetFromTheme(
  (theme: Theme) => ({
    containerStyle: {
      height: formatSize(40),
      borderRadius: formatSize(8),
    },
    iconStyle: {
      size: formatSize(16),
      marginRight: formatSize(2),
    },
    activeColorConfig: {
      titleColor: theme.white,
      backgroundColor: theme.primary,
    },
    disabledColorConfig: {
      titleColor: theme.text,
      backgroundColor: theme.grey,
    },
  })
);
