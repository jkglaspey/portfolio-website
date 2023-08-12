import React from 'react';
import Image from 'next/image';

import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { VerticalFeatureInformation } from '../feature/VerticalFeatureInformation';
import { VerticalFeatureImage } from '../feature/VerticalFeatureImage';
import HorizontalLinkList from '../feature/HorizontalLinkList';
import { Section } from '../layout/Section';
import Break from '../layout/Break';
import { ButtonLink } from '../layout/ButtonLink';

const VerticalFeatures = () => {
  
  return (
    <Background color="bg-gray-900">

      {/* Heading */}
      <Section
        title="Hello! 👋"
        description="My name is Joshua Glaspey. I am a developer, a student, but most of all, a learner."
      >
        <Break type="oneEighth" />
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <Break type="oneEighth" />

        {/* Introductory Section */}
        <VerticalFeatureInformation
          title1="I am a rising senior."
          title2="Burnett's Honors College at University of Central Florida."
          description="I am currently pursuring a Bachelor's degree in Computer Engineering, with a minor in Mathematics. It all started with a passion of understanding the fundamentals of how computers operate in high school. Since then, I have worked with UI design, full stack web development, and video game creation. I am moving towards studying Artificial Intelligence, and the benefits it can bring to workflows."
          image1="/images/University_of_Central_Florida_seal.png"
          imageAlt1="UCF Emblem"
          image2="/images/Burnett_Honors_College_UCF.png"
          imageAlt2="Burnett's Honors College Emblem"
        />
        <Break type="oneEighth" />
        <VerticalFeatureInformation
          title1="I am researching Artificial Intelligence."
          title2="Currently working towards completing a Master's Degree in Machine Learning."
          description="I am continuing my journey at the University of Central Florida towards understanding complex Artificial Intelligence. I am beginning my pathway towards a Master's degree in Intelligent Systems and Machine Learning, while expanding on my undergraduate knowledge in both Computer Engineering and Mathematics. I intend to dive into research projects, which will be included in this website."
          image1="/images/UCF-Machine-Learning-Badge.png"
          imageAlt1="UCF Machine Learning Badge"
          image2="/images/machine-learning-brain-icon.png"
          imageAlt2="Icon of brain design with wires and CPU chips"
          right
        />
        {/* Add a "learn more about me" here */}
        <ButtonLink
          title="Interested? Learn more about me."
          button={
            <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-700 rounded active:bg-amber-600 active:shadow-[0_8px_9px_-4px_rgba(180,83,9,0.4),0_4px_18px_0_rgba(180,83,9,0.3)]">
              Click here.
            </button>
          }
        />
        <Break type="oneThird" />
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <Break type="oneEighth" />


        {/* Skills, Experience, Resume */}
        <HorizontalLinkList
          title="Here is a list of my personal skills."
          links={[
            { title: 'About' },
            { title: 'Premium' },
            { title: 'Campaigns' },
            { title: 'Blog' },
            { title: 'Affiliate Program' },
            { title: 'FAQs' },
            { title: 'Contact' },
          ]}
        />
        {/* Projects */}

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
