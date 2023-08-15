import React from 'react';
import Image from 'next/image';

import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { VerticalFeatureInformation } from '../feature/VerticalFeatureInformation';
import { VerticalFeatureImage } from '../feature/VerticalFeatureImage';
import HorizontalLinkList from '../feature/HorizontalLinkList';
import { VerticalFeatureWorkExperience } from '../feature/VerticalFeatureWorkExperience';
import { Section } from '../layout/Section';
import Break from '../layout/Break';
import { ButtonLink } from '../layout/ButtonLink';
import { ParticleBackground } from "../particles.js"

const VerticalFeatures = () => {
  return (
    <div id="background">
      {/* <Background color="bg-gray-900"> */}
        <ParticleBackground />

        <div id="content">


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
              image="/images/Burnett_Honors_College_UCF.png"
              imageAlt="Burnett's Honors College at UCF Emblem"
            />
            <Break type="oneEighth" />
            <VerticalFeatureInformation
              title1="I am researching Artificial Intelligence."
              title2="Currently working towards completing a Master's Degree in Machine Learning."
              description="I am continuing my journey at the University of Central Florida towards understanding complex Artificial Intelligence. I am beginning my pathway towards a Master's degree in Intelligent Systems and Machine Learning, while expanding on my undergraduate knowledge in both Computer Engineering and Mathematics. I intend to dive into research projects, which will be included in this website as progress ensues."
              image="/images/UCF-Machine-Learning-Badge.png"
              imageAlt="UCF Machine Learning Badge"
              right
            />
            <ButtonLink
              title="Interested? Learn more about me."
              button={
                <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-700 rounded active:bg-amber-600 active:shadow-[0_8px_9px_-4px_rgba(180,83,9,0.4),0_4px_18px_0_rgba(180,83,9,0.3)]">
                  Click here.
                </button>
              }
            />
            <Break type="oneFourth" />
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <Break type="oneEighth" />









            {/* Skills */}
            {/* Make the items clickable to show a picture + description */}
            <h3 className="text-3xl font-semibold text-white text-center">
              Here are my <strong>skills.</strong>
            </h3>
            <HorizontalLinkList
              title="Frontend Development and Design."
              links={[
                { title: 'JavaScript' },
                { title: 'TypeScript' },
                { title: 'HTML & CSS' },
                { title: 'Github' },
                { title: 'Next.js' },
                { title: 'React' },
                { title: 'Tailwind CSS' },
                { title: 'Headless UI' },
                { title: 'Material UI'},
              ]}
            />
            <Break type="oneEighth" />
            <HorizontalLinkList
              title="Game Design."
              links={[
                { title: 'Unreal Engine' },
                { title: 'Unity' },
              ]}
            />
            <Break type="oneEighth" />
            <HorizontalLinkList
              title="Programming Languages."
              links={[
                { title: 'Java' },
                { title: 'JavaScript' },
                { title: 'C' },
                { title: 'C#' },
                { title: 'Python' },
              ]}
            />
            <Break type="oneEighth" />
            <HorizontalLinkList
              title="Computer Engineering Discipline."
              links={[
                { title: 'Embedded Processor Development' },
                { title: 'MIPS64' },
                { title: 'C' },
                { title: 'Assembly' },
                { title: 'TI Microcontroller MSP430' },
              ]}
            />
            <Break type="oneEighth" />

            <HorizontalLinkList
              title="Other Skills."
              links={[
                { title: 'Mathematics' },
                { title: 'Statistics' },
                { title: 'Data Analysis' },
                { title: 'Development Operations' },
                { title: 'Problem Solving' },
                { title: 'Logic' },
                { title: 'Leadership' },
                { title: 'Time Management' },
              ]}
            />
            <Break type="oneFourth" />
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <Break type="oneEighth" />












            { /* Experience */ }
            <h3 className="text-3xl font-semibold text-white text-center">
              Look at my previous <strong>industry experience.</strong>
            </h3>
            <VerticalFeatureWorkExperience
              title="Undergraduate Teaching Assistant."
              company="University of Central Florida"
              date="August 2022 - December 2022."
              location="Orlando, Florida."
              link="https://www.ucf.edu/"
              description={[
                "As a teaching assistant at the University of Central Florida, I hold accomplishment in aiding students in their technical development.",
                "I had many responsibilities in this position, varying from leading multiple weekly labratory sessions to completing large scale grading of assignments.",
                "However, I was able to gain many valuable skills from this position. I gained leadership in directing labratory sessions, responsibility in adhering to grading criteria, and strong time management by balancing these duties with my own student obligations.",
                "There is a great deal of work to be completed as a teaching assistant, which I now respect from my firsthand experience.",
              ]}
              responsibilities={[
                "Leading teaching groups to both reinforce ideas from the main lecture and to introduce new topics.",
                'Hosting available "office hours" to help students with concerns about the class or responsbilities.',
                "Grading student assignments.",
                "Proctoring quizzes and exams.",
                "Participating in weekly team meetings.",
              ]}
              image="/images/University_of_Central_Florida_seal.png"
              imageAlt="UCF Emblem"
            />
            <Break type="oneEighth" />
            <VerticalFeatureWorkExperience
              title="Development Operations Engineering Intern."
              company="Pratt & Whitney"
              date="May 2022 - August 2022."
              location="West Palm Beach, Florida."
              link="https://www.prattwhitney.com/"
              description={[
                "At Pratt & Whitney, I am prideful to be able to complete an internship as a Development Operations Engineering Intern.",
                "My main responsibility was to analyze data being collected on instrumentation for facility engine readiness.",
                "Overall, this experience supplied me with a strong understanding of industry activity, as well as reinforced my data-analysis and organizational skills.",
                "Throughout this summer, I was able to understand firsthand how dependable Pratt & Whitney's engines are, and how they are redefining the future of aviation.",
              ]}
              responsibilities={[
                "Researching new technology to determine if it contributes to increased efficiency in the data recording system.",
                "Gathering and analyzing data using statistical analysis tools such as Microsoft Excel.",
                "Writing documentation for future workers to reference.",
                "Presenting information to high-leadership roles within the company.",
                "Learning and optimizing existing company software and technology.",
              ]}
              image="/images/pratt-whitney-icon.png"
              imageAlt="Pratt & Whitney Logo"
            />
            <Break type="oneEighth" />
            <VerticalFeatureWorkExperience
              title="On-Site Support Technician."
              company="Martin County School District"
              date="August 2018 - May 2020."
              location="Palm City, Florida."
              link="https://www.martinschools.org/"
              description={[
                "As a technician in the Martin County School District, I was able to gain valuable experience on industry workflow.",
                "I was stationed at a local elementary school, and operated by responding to technical issues by the teachers on a ticket basis.",
                "Primarily, I was able to solidify my customer support and commmunication abilities.",
                "Generally, since this was my first position, I gained a valuable experience the definition of being in a position relied on under certain needs.",
              ]}
              responsibilities={[
                "Maintaining hardware devices, such as laptops, projectors, Smart boards, printers, along with other smaller equipment.",
                "Referencing documentation and contacting customer support to acquire information about a product.",
                "Developing help-desk skills.",
                "Learning existing company software.",
              ]}
              image="/images/martin-county-school-district-logo.png"
              imageAlt="Martin County School District Logo"
            />
            <Break type="oneEighth" />
            <VerticalFeatureWorkExperience
              title="ENERCON Career Opportunities Job Shadowing."
              company="ENERCON"
              date="August 2021 - August 2021."
              location="Lake Mary, Florida."
              link="https://www.enercon.com/"
              description={[
                "At ENERCON, I was given the opportunity to shadow professionals in the power industry and gain insightful knowledge on the routine duties such a position would entail.",
                "I was exposed to potential career paths within the fields of nuclear energy, as well as power delivery.",
                "Ultimately, this event lasted for one day, but I was able to gain valuable knowledge about electrical power transmission, but also to gather strong connections.",
              ]}
              responsibilities={[]}
              image="/images/enercon-logo.png"
              imageAlt="ENERCON Logo"
              hideResponsibilitiesHeader
            />
            <Break type="oneEighth" />
            <ButtonLink
              title="Want to check out my resume?"
              button={
                <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-700 rounded active:bg-amber-600 active:shadow-[0_8px_9px_-4px_rgba(180,83,9,0.4),0_4px_18px_0_rgba(180,83,9,0.3)]">
                  Click here.
                </button>
              }
            />
            <Break type="oneFourth" />
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <Break type="oneEighth" />










            {/* Projects */}
            <h3 className="text-3xl font-semibold text-white text-center">
              Check out some of my <strong>projects.</strong>
            </h3>
            <VerticalFeatureRow
              title="Blueshift."
              description="Have you ever experienced being hunted in an isolate environment? This virtual reality project tests your problem solving skills, as well as evasive maneuvers while you are being chased by an alien entity. Blueshift was created using the Unity game engine, with resources being sourced from the Unity Asset Store."
              images={[
                "/images/blueshift/Blueshift_1.gif",
                "/images/blueshift/Blueshift_2.png",
                "/images/blueshift/Blueshift_3.gif",
                "/images/blueshift/Blueshift_4.png",
                "/images/blueshift/Blueshift_5.gif",
                "/images/blueshift/Blueshift_6.png",
              ]}
              imageAlts={[
                "Running down a hallway.",
                "Hiding in a locker.",
                "AI movement mapping",
                "Dying to the monster",
                "Freezing time",
                "VRtual logo.",
              ]}
            />
            <VerticalFeatureRow
              title="Fyrecracker"
              description='Fyrecracker is a project that intends to blend gameplay and deep learning artificial intelligence. Be the last of your friends standing by exploding them out of the playable area, or outlast AI agents trained through reinforcement learning algorithms. This project is created using Unreal Engine 5, and strives to produce a learning environment for AI entities.'
              images={[
                "/images/fyrecracker/Fyrecracker_1.png",
                "/images/fyrecracker/Fyrecracker_2.gif",
                "/images/fyrecracker/Fyrecracker_3.png",
                "/images/fyrecracker/Fyrecracker_4.gif",
              ]}
              imageAlts={[
                "AI model.",
                "Running around a playable map.",
                "AI blueprint.",
                "Falling off the map.",
              ]}
              reverse
            />
            <VerticalFeatureRow
              title="Hush UCF"
              description="Hush UCF aims to please the quiet voices who are worried about being held wrongfully responsible for sharing information about university life - whether it be bad reviews for professors or general advice. This website application was created using the MERN stack, and served as my first experience working with a full-stack application."
              images={[
                "/images/hushucf/Hushucf_1.png",
                "/images/hushucf/Hushucf_2.png",
                "/images/hushucf/Hushucf_3.png",
                "/images/hushucf/Hushucf_4.png",
                "/images/hushucf/Hushucf_5.png",
              ]}
              imageAlts={[
                "Main website icon.",
                "Figma planning for website.",
                "Unit testing results.",
                "ERD.",
                "User diagram.",
              ]}
            />
            <VerticalFeatureRow
              title="Team Scripted"
              description={`We started off as a couple of friends working on passion projects through the video game "Minecraft." However, throughout the years, we were able to establish ourselves as a freelance group who gathered an official community and submitted projects directly to Mojang.`}
              images={[
                "/images/teamscripted/Teamscripted_1.png",
                "/images/teamscripted/Teamscripted_2.png",
                "/images/teamscripted/Teamscripted_3.png",
                "/images/teamscripted/Teamscripted_4.png",
                "/images/teamscripted/Teamscripted_5.png",
                "/images/teamscripted/Teamscripted_6.png",
                "/images/teamscripted/Teamscripted_7.png",
                "/images/teamscripted/Teamscripted_8.png",
              ]}
              imageAlts={[
                "Team Scripted Logo.",
                "Rematch Minigame.",
                "Sky Scapers Minigame.",
                "Gameplay from Rematch.",
                "Gameplay from Sky Scapers.",
                "Gameplay from Sky Scapers.",
                "Scenic view from Rematch.",
                "Scenic view from Rematch.",
              ]}
              reverse
            />
          </Section>
        </div>
      {/* </Background> */}
    </div>
  )
};

export { VerticalFeatures };
