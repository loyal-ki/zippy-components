import { makeStyleSheetFromTheme, typography, formatSize } from 'src/utils';

export const getButtonTextStyleConfig = makeStyleSheetFromTheme(
  (theme: Theme) => ({
    titleStyle: {
      ...typography.text16Bold,
    },
    containerStyle: {
      width: '100%',
      height: formatSize(56),
      borderRadius: 0,
    },
    activeColorConfig: {
      titleColor: theme.primary,
      backgroundColor: '',
    },
    disabledColorConfig: {
      titleColor: theme.text,
      backgroundColor: theme.grey,
    },
  })
);
