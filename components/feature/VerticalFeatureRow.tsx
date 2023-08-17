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
  isDarkMode?: boolean;
  htmlFor?: string;
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
        <h3 className={`text-3xl font-semibold ${ props.isDarkMode ? "text-white" : "text-gray-900"}`}>{props.title}</h3>
        <div className={`mt-6 text-xl leading-9 ${ props.isDarkMode ? "text-white" : "text-gray-900"}`}>{props.description}</div>
        <div className="flex">
          <div>
            
          </div>
          <ButtonLink
            title=""
            button={
              <button>
                <label htmlFor={props.htmlFor ? props.htmlFor : ''} className="btn drawer-button">
                  Learn more about {props.title}.
                </label>
              </button>
            }
          />
        </div>
        
      </div>

      <div className="w-full sm:w-1/2">
        <Carousel images={props.images} imageAlts={props.imageAlts}/>
      </div>
        {/* <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} /> */}
    </div>
  );
};

export { VerticalFeatureRow };
