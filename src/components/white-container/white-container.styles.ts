import { formatSize, generateShadow, makeStyleSheetFromTheme } from '@utils';

export const useWhiteContainerStyles = makeStyleSheetFromTheme(
  (theme: Theme) => ({
    container: {
      ...generateShadow(1, theme.black),
      borderRadius: formatSize(10),
      backgroundColor: theme.cardBackground,
    },
  })
);
