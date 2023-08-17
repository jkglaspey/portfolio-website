import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

type IHorizontalLinkListProps = {
  title: string;
  links: { title: string }[];
  isDarkMode?: boolean;
};

const HorizontalLinkList = (props: IHorizontalLinkListProps) => {
  const { title, links } = props;

  const colorCombinations = [
    ['bg-amber-700', 'hover:bg-amber-800'],
    ['bg-amber-600', 'hover:bg-amber-700'],
    ['bg-amber-800', 'hover:bg-amber-900'],
  ];

  const getRandomColorCombination = () => {
    const randomIndex = Math.floor(Math.random() * colorCombinations.length);
    return colorCombinations[randomIndex];
  };

  const verticalFeatureClass = classNames(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center'
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className={'w-full'}>
        <h3 className={`text-2xl font-semibold ${props.isDarkMode ? "text-white" : "text-gray-900"} text-center`}>{title}</h3>
        <ul className="mb-5 flex list-none flex-wrap pl-0 md:flex-row justify-center">
          {links.map((link, index) => {
            const [bgClass, hoverClass] = getRandomColorCombination();
            const itemClass = classNames(
              'text-center',
              'my-[5px]',
              'mr-4',
              'cursor-pointer',
              'items-center',
              'justify-between',
              'rounded',
              bgClass,
              hoverClass,
              'px-[12px]',
              'text-xl',
              'font-semibold',
              'leading-loose',
              'text-white',
              'text-3xl',
              'transition-[opacity]',
              'duration-300',
              'ease-linear',
              'hover:!shadow-none'
            );

            return (
              <li key={index} className="text-center">
                <div
                  data-te-chip-init
                  data-te-ripple-init
                  className={itemClass}
                  data-te-close="true"
                >
                  {link.title}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HorizontalLinkList;
