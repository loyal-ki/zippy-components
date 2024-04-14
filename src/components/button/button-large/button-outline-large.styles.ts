import { formatSize, makeStyleSheetFromTheme, typography } from '@src/utils';

export const getButtonOutlineLargeStyleConfig = makeStyleSheetFromTheme(
  (theme: Theme) => ({
    titleStyle: {
      ...typography.text16Bold,
    },
    containerStyle: {
      height: formatSize(56),
      borderRadius: formatSize(8),
      borderWidth: 2,
      borderStyle: 'dashed',
    },
    iconStyle: {
      size: formatSize(20),
      marginRight: formatSize(2),
    },
    activeColorConfig: {
      titleColor: theme.primary,
      borderColor: theme.primary,
      backgroundColor: '',
    },
    disabledColorConfig: {
      titleColor: theme.text,
      backgroundColor: theme.grey,
    },
  })
);
