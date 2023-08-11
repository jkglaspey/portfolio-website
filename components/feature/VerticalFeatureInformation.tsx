import className from 'classnames';
import Image from 'next/image'
import { useRouter } from 'next/router';

type IVerticalFeatureInformationProps = {
  title1: string;
  title2: string;
  description: string;
  image1: string;
  imageAlt1: string;
  image2: string;
  imageAlt2: string;
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
      <div className={`w-full ${ props.right ? 'text-right' : 'text-left'}`}>
        <h3 className="text-3xl font-semibold text-white">{props.title1}</h3>
        <div className="text-2xl text-white">{props.title2}</div>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
        <div>
          <div className="h-screen grid grid-cols-2 gap-32">
            <img
              className="object-scale-down max-h-min m-auto"
              src={`${router.basePath}${props.image1}`} 
              alt={props.imageAlt1}
            />
            <img
              className="object-scale-down max-h-min m-auto"
              src={`${router.basePath}${props.image2}`} 
              alt={props.imageAlt2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureInformation };