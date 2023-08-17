import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={`transition-all duration-5000 ease-in-out ${props.color}`}>
    {props.children}
  </div>
);

export { Background };
