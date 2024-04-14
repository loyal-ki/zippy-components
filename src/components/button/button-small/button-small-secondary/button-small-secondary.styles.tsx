import { makeStyleSheetFromTheme } from '@utils';
import { getButtonSmallSharedStyleConfig } from '@components/button/button-small/button-small.styles';

export const getButtonSmallSecondaryStyles = makeStyleSheetFromTheme(
  (theme: Theme) => ({
    ...getButtonSmallSharedStyleConfig(theme),
    activeColorConfig: {
      titleColor: theme.white,
      backgroundColor: theme.primary,
    },
  })
);
