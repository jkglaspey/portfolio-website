import type { ReactNode } from 'react';
import React from 'react';

type IFooterIconListProps = {
  children: ReactNode;
  titles: string[];
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="footer-icon-list grid grid-flow-col gap-10 justify-center">
    {React.Children.map(props.children, (child, index) => (
      <div className="text-center flex flex-col items-center">
        <div className="mb-2 text-xl font-semibold text-white">
          {props.titles[index]}
        </div>
        <div className="w-24 h-24 hover:scale-110 transform origin-center transition-transform">
          {child}
        </div>
      </div>
    ))}

    <style jsx>
      {`
        .footer-icon-list :global(a) {
          @apply text-gray-500;
        }

        .footer-icon-list :global(a:hover) {
          @apply text-gray-700;
        }
      `}
    </style>
  </div>
);

export { FooterIconList };
