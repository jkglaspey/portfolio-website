import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    {props.button}
  </header>
);

export { HeroOneButton };
