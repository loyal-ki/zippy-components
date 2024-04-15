import { formatSize, makeStyleSheetFromTheme, typography } from 'src/utils';

export const useWhiteContainerTextStyles = makeStyleSheetFromTheme(
  (theme: Theme) => ({
    text: {
      ...typography.text14Regular,
      color: theme.text,
      marginLeft: formatSize(8),
    },
  })
);
