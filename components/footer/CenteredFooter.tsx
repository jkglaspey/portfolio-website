import type { ReactNode } from 'react';
import { FooterCopyright } from './FooterCopyright';
import Break from '../layout/Break';
import { SendEmail } from '../templates/SendEmail';

type ICenteredFooterProps = {
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center justify-center">
    <nav>
      <ul className="navbar mt-5 flex flex-row justify-center text-2xl font-semibold text-white">
        {props.children}
      </ul>
    </nav>

    <div className="mt-8 flex justify-center">
      {props.iconList}
    </div>

    <Break type="oneEighth" />
    <SendEmail />
    <Break type="oneFourth" />

    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
