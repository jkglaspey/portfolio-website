import React from 'react';

interface BreakProps {
  type: 'half' | 'oneThird' | 'oneEighth' | 'image';
  imageSrc?: string; // New prop for image URL
}

const Break: React.FC<BreakProps> = ({ type, imageSrc }) => {
  let classNames = '';

  switch (type) {
    case 'half':
      classNames = 'h-[50vh]';
      break;
    case 'oneThird':
      classNames = 'h-[33.33vh]';
      break;
    case 'oneEighth':
      classNames = 'h-[5vh]';
      break;
    case 'image':
      classNames = 'h-[75vh]'; // 3/4th of the screen
      break;
    default:
      break;
  }

  return (
    <div className={classNames}>
      {type === 'image' && imageSrc && <img className="w-full h-full" src={imageSrc} alt="Image" />}
    </div>
  );
};

export default Break;