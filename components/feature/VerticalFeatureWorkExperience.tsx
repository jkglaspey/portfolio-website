import className from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

type IVerticalFeatureWorkExperienceProps = {
  title: string;
  company: string;
  date: string;
  location: string;
  link: string;
  description: string[];
  responsibilities: string[];
  image: string;
  imageAlt: string;
  hideResponsibilitiesHeader?: boolean;
};

const VerticalFeatureWorkExperience = (props: IVerticalFeatureWorkExperienceProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-start'
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="grid grid-cols-6 w-full">
        <div className="col-span-4 text-left">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-white">{props.title}</h3>
            <div className="pl-3 text-2xl text-white">{props.company}.</div>
            <div className="pl-6 text-xl text-white">{props.date}</div>
            <div className="pl-9 text-xl text-white">
              {props.location}
              <div>
                <a href={props.link} target="_blank" rel="noopener noreferrer" className="pl-3 text-blue-500 hover:underline">
                  Check out the official {props.company} website.
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 ml-6">
          <img
            className="object-scale-down max-h-min"
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
          />
        </div>
      </div>
      <div className="w-full mt-6 text-xl leading-9">
        {props.description.map((desc, index) => (
          <div key={index} className="mb-2">
            {desc}
          </div>
        ))}
      </div>
      {!props.hideResponsibilitiesHeader && (
        <div className="w-full mt-6 text-2xl font-semibold text-center">
          Responsibilities:
        </div>
      )}
      <div className="w-full mt-6 text-xl">
        <ul className="list-disc list-inside">
          {props.responsibilities.map((resp, index) => (
            <li
              key={index}
              className="py-1 hover:bg-gray-800 dark:hover:bg-gray-800"
            >
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { VerticalFeatureWorkExperience };
