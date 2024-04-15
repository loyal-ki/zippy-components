import { formatSize, makeStyleSheetFromTheme } from '../../../../src/utils';

export const useWhiteContainerDividerStyles = makeStyleSheetFromTheme(
  (theme: Theme) => ({
    divider: {
      marginHorizontal: formatSize(12),
      borderBottomWidth: formatSize(0.5),
      borderColor: theme.primarySecondary,
    },
  })
);
