import { makeStyleSheetFromTheme } from '../../../../utils';
import { getButtonSmallSharedStyleConfig } from '../button-small.styles';

export const getButtonSmallDelegateStyles = makeStyleSheetFromTheme(
  (theme: Theme) => ({
    ...getButtonSmallSharedStyleConfig(theme),
    activeColorConfig: {
      titleColor: theme.white,
      backgroundColor: theme.primary,
    },
  })
);
