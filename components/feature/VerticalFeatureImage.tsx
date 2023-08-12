import className from 'classnames';
import Image from 'next/image'
import { useRouter } from 'next/router';

type IVerticalFeatureInformationProps = {
  title: string;
  image: string;
  imageAlt: string;
};

const VerticalFeatureImage = (props: IVerticalFeatureInformationProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center'
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className={'w-full'}>
        <h3 className="text-3xl font-semibold text-white text-center">{props.title}</h3>
        <img
            className="object-scale-down max-h-min m-auto"
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureImage };