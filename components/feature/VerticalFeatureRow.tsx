import className from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';
import Carousel from '../carousel/Carousel';
import { ButtonLink } from '../layout/ButtonLink';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  images: string[];
  imageAlts: string[];
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {

  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-white">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
        <ButtonLink
              title=""
              button={
                <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-700 rounded active:bg-amber-600 active:shadow-[0_8px_9px_-4px_rgba(180,83,9,0.4),0_4px_18px_0_rgba(180,83,9,0.3)]">
                  Learn more about {props.title}.
                </button>
              }
            />
      </div>

      <div className="w-full sm:w-1/2">
        <Carousel images={props.images} imageAlts={props.imageAlts}/>
      </div>
        {/* <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} /> */}
    </div>
  );
};

export { VerticalFeatureRow };
