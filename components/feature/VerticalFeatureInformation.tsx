import React from 'react';
import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureInformationProps = {
  title1: string;
  title2: string;
  description: string;
  image: string;
  imageAlt: string;
  right?: boolean;
};

const VerticalFeatureInformation = (props: IVerticalFeatureInformationProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-start',
    {
      'flex-row-reverse': props.right,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="flex w-full">
        {props.right ? (
          <>
            <div className="w-1/3">
              <img
                className="object-scale-down max-h-min m-auto"
                src={`${router.basePath}${props.image}`}
                alt={props.imageAlt}
              />
            </div>
            <div className={`w-2/3 text-right pr-8`}>
              <h3 className="text-3xl font-semibold text-white">{props.title1}</h3>
              <div className="text-2xl text-white mt-2">{props.title2}</div>
              <div className="mt-6 text-xl leading-9">{props.description}</div>
            </div>
          </>
        ) : (
          <>
            <div className={`w-2/3 text-left pl-8`}>
              <h3 className="text-3xl font-semibold text-white">{props.title1}</h3>
              <div className="text-2xl text-white mt-2">{props.title2}</div>
              <div className="mt-6 text-xl leading-9">{props.description}</div>
            </div>
            <div className="w-1/3">
              <img
                className="object-scale-down max-h-min m-auto"
                src={`${router.basePath}${props.image}`}
                alt={props.imageAlt}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { VerticalFeatureInformation };
