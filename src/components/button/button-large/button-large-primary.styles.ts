import { makeStyleSheetFromTheme } from '@src/utils';

import { getButtonLargeStyleConfig } from './button-large.styles';

export const getButtonLargePrimaryStyleConfig = makeStyleSheetFromTheme(
  (theme: Theme) => ({
    ...getButtonLargeStyleConfig(theme),
    activeColorConfig: {
      titleColor: theme.white,
      backgroundColor: theme.primary,
    },
    disabledColorConfig: {
      titleColor: theme.textDisable,
      backgroundColor: theme.disableBackground,
    },
  })
);
