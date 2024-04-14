import { useCallback, useState } from 'react';

type VoidFunc = () => void;

export type UseModalType = [
  boolean,
  VoidFunc,
  { onVisible: VoidFunc; onHidden: VoidFunc },
];

export default function useModal(initialState = false): UseModalType {
  const [visible, setVisible] = useState<boolean>(initialState);

  const onVisible = useCallback(() => {
    setVisible(true);
  }, []);

  const onHidden = useCallback(() => {
    setVisible(false);
  }, []);

  const onToggle = useCallback(() => {
    setVisible((s) => !s);
  }, []);

  return [visible, onToggle, { onVisible, onHidden }];
}
