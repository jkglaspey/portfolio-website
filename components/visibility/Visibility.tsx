import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  opacity: string;
};

const Visibility = (props: IBackgroundProps) => (
  <div className={props.opacity}>{props.children}</div>
);

export { Visibility };
