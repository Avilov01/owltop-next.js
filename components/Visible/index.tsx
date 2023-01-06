import { FC, PropsWithChildren } from 'react';

interface VisibleProps {
  trigger: unknown;
}

export const Visible: FC<PropsWithChildren<VisibleProps>> = ({ trigger, children }) => (
  <>{trigger && children}</>
);