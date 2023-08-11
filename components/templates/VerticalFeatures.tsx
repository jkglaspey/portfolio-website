import React from 'react';
import Image from 'next/image';

import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { VerticalFeatureInformation } from '../feature/VerticalFeatureInformation';
import { Section } from '../layout/Section';
import Break from '../layout/Break';

const VerticalFeatures = () => {
  
  return (
    <Background color="bg-gray-900">
      <Section
        title="Hello! 👋"
        description="My name is Joshua Glaspey. I am a developer, a student, but most of all, a learner."
      >
        <Break type="oneEighth" />
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <Break type="oneEighth" />
        <VerticalFeatureInformation
          title1="I am a rising senior"
          title2="Burnett's Honors College at University of Central Florida"
          description="I am currently pursuring a Bachelor's degree in Computer Engineering. It all started with a passion of understanding the fundamentals of how computers operate in high school. Since then, I have worked with UI design, full stack web development, and video game creation. I am moving towards studying Artificial Intelligence, and the benefits it can bring to workflows."
          image1="/images/University_of_Central_Florida_seal.png"
          imageAlt1="UCF Emblem"
          image2="/images/Burnett_Honors_College_UCF.png"
          imageAlt2="Burnett's Honors College Emblem"
        />
        <VerticalFeatureRow
          title="Your title here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
          image=""
          imageAlt="Second feature alt text"
          reverse
        />
        <VerticalFeatureRow
          title="Your title here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
          image=""
          imageAlt="Third feature alt text"
        />
      </Section>
    </Background>
  )
};

export { VerticalFeatures };
