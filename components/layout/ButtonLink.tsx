import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  yPadding?: string;
  button?: ReactNode;
};

const ButtonLink = (props: ISectionProps) => (
  <div
    className={`mx-auto max-w-screen-lg px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.button) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl font-bold text-white">{props.title}</h2>
        )}
        {props.button && (
          <div className="mt-4">{props.button}</div>
        )}
      </div>
    )}
  </div>
);

export { ButtonLink };
