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
              title1="Who am I?"
              title2="Recent Master's graduate in Computer Engineering at UCF."
              description="I am a recent Master's graduate from the University of Central Florida (UCF), where I specialized in Intelligent Systems and Machine Learning. I previously earned my Bachelor's degree in Computer Engineering with a minor in Mathematics while enrolled in the Burnett's honors program at UCF. My focus throughout both degrees has been applying machine learning and software engineering to build tools that are useful, intuitive, and broadly accessible."
              image="/images/UCF-Machine-Learning-Badge.png"
              imageAlt="UCF Machine Learning Badge."
            />
            <Break type="oneEighth" />
            <VerticalFeatureInformation
              isDarkMode={isDarkMode}
              title1="What have I worked on?"
              title2="Industry experience, academic research, and practical problem-solving."
              description="I've had the opportunity to work across a range of teams and projects - from an internship at Microsoft, where I contributed to the software development work cycle for Power BI, to academic research in large language models, computer vision, and multi-modal alignment. I enjoy solving complex problems with clean, practical solutions, and I'm especially drawn to building tools that simplify workflows and make software more approachable."
              image="/images/power_bi_logo.png"
              imageAlt="Microsoft PowerBI Logo."
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
              title="Machine Learning."
              links={[
                { title: 'PyTorch' },
                { title: 'scikit-learn' },
                { title: 'HuggingFace Transformers' },
                { title: 'LLMs / PLMs' },
                { title: 'GPT' },
                { title: 'LLaMA' },
                { title: 'YOLOv8' },
                { title: 'OpenCV' },
                { title: 'MediaPipe' },
                { title: 'CNNs' },
                { title: 'Preference Fine-Tuning' },
                { title: 'Reinforcement Learning from Human Feedback' },
                { title: 'Direct Preference Optimization' },
                { title: 'Prompt Engineering' },
                { title: 'Data Preprocessing' },
                { title: 'Benchmarking' },
                { title: 'Gaussian Noise Modeling' },
                { title: 'Data Augmentation' },
                { title: 'Data Regularization' },
              ]}
            />
            <Break type="oneEighth" />
            <HorizontalLinkList
              isDarkMode={isDarkMode}
              title="Frontend Development and Design."
              links={[
                { title: 'JavaScript' },
                { title: 'TypeScript' },
                { title: 'HTML & CSS' },
                { title: 'Github' },
                { title: 'Next.js' },
                { title: 'Angular' },
                { title: 'React' },
                { title: 'Tailwind CSS' },
                { title: 'Headless UI' },
                { title: 'Material UI'},
              ]}
            />
            <Break type="oneEighth" />
            <HorizontalLinkList
              isDarkMode={isDarkMode}
              title="Backend Development."
              links={[
                { title: 'REST APIs' },
                { title: 'Node.js' },
                { title: 'SQL' },
                { title: 'File Handling' },
                { title: 'Data Parsing' },
                { title: 'State Management' },
                { title: 'Vercel' },
                { title: 'GitHub Pages' },
              ]}
            />
            <Break type="oneEighth" />
            <HorizontalLinkList
              isDarkMode={isDarkMode}
              title="Game Design."
              links={[
                { title: 'Unreal Engine 4' },
                { title: 'Unreal Engine 5' },
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
                { title: 'TypeScript' },
                { title: 'C' },
                { title: 'C#' },
                { title: 'Python' },
                { title: 'R' },
                { title: 'SQL' },
                { title: 'Bash' },
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
                { title: 'Operating Systems' },
                { title: 'Linux' },
                { title: 'Computer Architecture' },
                { title: 'Signal Processing and Control Systems' },
                { title: 'Discrete Mathematics' },
              ]}
            />
            <Break type="oneEighth" />
            <HorizontalLinkList
              isDarkMode={isDarkMode}
              title="Other Skills."
              links={[
                { title: 'Visual Studio Code' },
                { title: 'Linear Algebra' },
                { title: 'Statistics' },
                { title: 'Data Analysis' },
                { title: 'Development Operations' },
                { title: 'Technical Documentation' },
                { title: 'Technical Presentations' },
                { title: 'Agile' },
                { title: 'Scrum' },
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
              title="Software Engineer."
              company="Microsoft"
              date="August 2025 - Current."
              location="Redmond, Washington."
              link="https://www.microsoft.com/en-us/"
              description={[
                "Starting August 2025, I'll be returning to Microsoft full-time as a Software Engineer on the Power BI team. After a great experience as an intern, I was offered the opportunity to come back and take on a larger role within the team. I'll be contributing to Power BI's stability and reliability by helping resolve bugs and supporting the product's ongoing development.",
                "I'm especially excited to transition from intern to full-time and dive deeper into the day-to-day workflow of a large-scale engineering team. Having already built context during my internship, I'm looking forward to growing my impact and continuing to work on tools that empower users through accessible, data-driven insights."
              ]}
              image="/images/microsoft_logo.png"
              imageAlt="Microsoft Logo."
            />
            <Break type="oneEighth" />
            <VerticalFeatureWorkExperience
              isDarkMode={isDarkMode}
              title="Software Engineer Intern."
              company="Microsoft"
              date="May 2024 - August 2024."
              location="Redmond, Washington."
              link="https://www.microsoft.com/en-us/"
              description={[
                "As a Software Engineering Intern at Microsoft, I was involved in enhancing Power BI, a leading data visualization and business intelligence platform. My role centered on applying agile engineering principles to address the breaking down and execution of a technical feature.",
                "In this position, I was responsible for frontend work within the web service for Power BI. I collaborated closely with cross-functional teams, including Program Managers, to align on user requirements and promise high-quality deliverables. This experience enabled me to refine my skills in software design, development, and testing.",
                "My internship provided me with hands-on experience in leveraging modern technologies and methodologies, and it sharpened my ability to manage complex projects effectively. I learned to navigate the dynamic landscape of software engineering, balancing multiple tasks while adhering to project timelines."
                ]}
              responsibilities={[
                "Contributed to the planning and development of a new feature within the Power BI platform.",
                "Engaged in drafting, coding, debugging, testing, and validating to ensure high performance and reliability of the software.",
                "Collaborated with team members to gather requirements and ensure communication throughout the project.",
                "Utilized related tools and best practices to enhance software functionality and user experience.",
                "Participated in team meetings and code reviews to maintain quality and coherence within the project."
              ]}
              image="/images/microsoft_logo.png"
              imageAlt="Microsoft Logo."
            />
            <Break type="oneEighth" />
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
            <div id="dynamic_work" className={`border-x-2 ml-0 ${ isDarkMode ? "border-gray-100 bg-gray-900" : "border-gray-900 bg-white"}`} style={{width: '100%'}}>
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
