import React from 'react';
import Link from 'next/link';
import Date from '../utils/date'

import { VerticalFeatureInformation } from '../feature/VerticalFeatureInformation';
import HorizontalLinkList from '../feature/HorizontalLinkList';
import { VerticalFeatureWorkExperience } from '../feature/VerticalFeatureWorkExperience';
import { Section } from '../layout/Section';
import Break from '../layout/Break';
import { ButtonLink } from '../layout/ButtonLink';
import { ParticleBackground } from "../particles.js"

const VerticalFeatures = ({ isDarkMode, allProjectsData }) => {
  return (
    <div id="background">
      <ParticleBackground isDarkMode={isDarkMode}/>

      <div id="content">


        {/* Heading */}
        <Section
          isDarkMode={isDarkMode}
          title="Hello! 👋"
          description="My name is Joshua Glaspey. I am a developer, a student, but most of all, a learner."
        >
          <Break type="oneEighth" />
          <hr className={`my-12 h-0.5 border-t-0 ${isDarkMode ? "bg-white" : "bg-gray-900"} opacity-100 dark:opacity-50`} />

          {/* Introductory Section */}
          <div id="introduction">
            <Break type="oneEighth" />
            <VerticalFeatureInformation
              isDarkMode={isDarkMode}
              title1="I am a rising senior."
              title2="Burnett's Honors College at University of Central Florida."
              description="I am currently pursuring a Bachelor's degree in Computer Engineering, with a minor in Mathematics. It all started with a passion of understanding the fundamentals of how computers operate in high school. Since then, I have worked with UI design, full stack web development, and video game creation. I am moving towards studying Machine Learning, and the benefits it can bring to workflows."
              image="/images/Burnett_Honors_College_UCF.png"
              imageAlt="Burnett's Honors College at UCF Emblem"
            />
            <Break type="oneEighth" />
            <VerticalFeatureInformation
              isDarkMode={isDarkMode}
              title1="I am researching Machine Learning."
              title2="Currently working towards completing a Master's Degree in Machine Learning."
              description="I am continuing my journey at the University of Central Florida towards understanding complex Artificial Intelligence. I am beginning my pathway towards a Master's degree in Intelligent Systems and Machine Learning, while expanding on my undergraduate knowledge in both Computer Engineering and Mathematics. I intend to dive into research projects, which will be included in this website as progress ensues."
              image="/images/UCF-Machine-Learning-Badge.png"
              imageAlt="UCF Machine Learning Badge"
              right
            />
            <ButtonLink
              isDarkMode={isDarkMode}
              title="Interested? Learn more about me."
              button={
                <button>
                  <Link className="btn" href="/about">Click here.</Link>
                </button>
              }
            />
            <Break type="oneFourth" />
            <hr className={`my-12 h-0.5 border-t-0 ${isDarkMode ? "bg-white" : "bg-gray-900"} opacity-100 dark:opacity-50`} />
          </div>






          {/* Skills */}
          <div id="skills">
            <Break type="oneEighth" />
            <h3 className={`text-3xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"} text-center`}>
              Here are my <strong>skills.</strong>
            </h3>
            <HorizontalLinkList
              isDarkMode={isDarkMode}
              title="Frontend Development and Design."
              links={[
                { title: 'JavaScript' },
                { title: 'TypeScript' },
                { title: 'HTML & CSS' },
                { title: 'Github' },
                { title: 'Next.js' },
                { title: 'Vercel' },
                { title: 'React' },
                { title: 'Tailwind CSS' },
                { title: 'Headless UI' },
                { title: 'Material UI'},
              ]}
            />
            <Break type="oneEighth" />
            <HorizontalLinkList
              isDarkMode={isDarkMode}
              title="Game Design."
              links={[
                { title: 'Unreal Engine' },
                { title: 'Unity' },
              ]}
            />
            <Break type="oneEighth" />
            <HorizontalLinkList
              isDarkMode={isDarkMode}
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
              isDarkMode={isDarkMode}
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
              isDarkMode={isDarkMode}
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
            <hr className={`my-12 h-0.5 border-t-0 ${isDarkMode ? "bg-white" : "bg-gray-900"} opacity-100 dark:opacity-50`} />
          </div>;








          { /* Experience */ }
          <div id="experience">
            <Break type="oneEighth" />
            <h3 className={`text-3xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"} text-center`}>
              Look at my previous <strong>industry experience.</strong>
            </h3>
            <VerticalFeatureWorkExperience
              isDarkMode={isDarkMode}
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
                'Hosting available "office hours" to help students with concerns about the class or responsibilities.',
                "Grading student assignments.",
                "Proctoring quizzes and exams.",
                "Participating in weekly team meetings.",
              ]}
              image="/images/University_of_Central_Florida_seal.png"
              imageAlt="UCF Emblem"
            />
            <Break type="oneEighth" />
            <VerticalFeatureWorkExperience
              isDarkMode={isDarkMode}
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
              isDarkMode={isDarkMode}
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
              isDarkMode={isDarkMode}
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
              isDarkMode={isDarkMode}
              title="Want to check out my resume?"
              button={
                <button>
                  <Link className="btn" href="/resume">Click here.</Link>
                </button>
              }
            />
            <Break type="oneFourth" />
            <hr className={`my-12 h-0.5 border-t-0 ${isDarkMode ? "bg-white" : "bg-gray-900"} opacity-100 dark:opacity-50`} />
          </div>









          {/* Projects */}
          <div id="projects">
            <Break type="oneEighth" />
            <h3 className={`text-3xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"} text-center`}>
              Check out some of my <strong>projects.</strong>
            </h3>
            <Break type="oneEighth" />
            <div id="dynamic_work" className={`border-x-2 ${ isDarkMode ? "border-gray-100 bg-gray-900" : "border-gray-900 bg-white"}`} style={{width: '150%', marginLeft: '-25%'}}>
              <ul>
                <div className={`flex overflow-x-auto scrollbar scrollbar-h-0.5 space-x-8 px-8 py-8 ${ isDarkMode ? "scrollbar-thumb-gray-100" : "scrollbar-thumb-gray-900"}`}>
                  {allProjectsData.map((project) => (
                    <li key={project.id}>
                      <Link href={`/projects/${project.id}`}>
                        <div className={`group card border-4 w-96 h-5/6 flex bg-base-100 shadow-xl transform transition duration-500 hover:scale-110 active:scale-100 ${ isDarkMode ? "text-gray-100 bg-gray-900 border-gray-200" : "text-gray-900 bg-white border-gray-800"}`}>
                          <figure className="w-auto transform transition duration-500 group-hover:opacity-25">
                            <img
                              src={`/images/${project.images[0]}`}
                              alt={`${project.alts[0]}`}
                            />
                          </figure>
                          <div className="card-body transform transition duration-500 group-hover:opacity-25">
                            <h2 className="card-title justify-center align-center">
                              {project.title}
                            </h2>
                            <h3 className="italic">{project.subtitle}</h3>
                            <p className="text-xs">
                              <Date dateString={project.date} />
                            </p>
                            <p className={`text-base text-center font-bold italic ${project.status == "COMPLETE." ? "text-green-600" : "text-red-600"}`}>
                              {project.status}
                            </p>
                            <div className="card-actions justify-end">
                              {project.keywords.map((keyword) => (
                                <div className="text-xs badge badge-outline">{keyword}</div>
                              ))}
                            </div>
                          </div>
                          <div className={`text-4xl group-hover-overlay absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity transform transition duration-500 group-hover:opacity-100 ${ isDarkMode ? "text-gray-100" : "text-gray-900"}`}>
                              <p className="text-center">
                                Click here to learn more!
                              </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </div>          
        </Section>
      </div>
    </div>
  )
};

export { VerticalFeatures };
