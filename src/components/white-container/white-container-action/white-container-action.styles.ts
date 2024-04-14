import { StyleSheet } from 'react-native';

import { formatSize } from '@utils';

export const WhiteContainerActionStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: formatSize(48),
    padding: formatSize(8),
  },
});
