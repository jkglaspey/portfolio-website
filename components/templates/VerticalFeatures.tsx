import React from 'react';
import Link from 'next/link';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { VerticalFeatureInformation } from '../feature/VerticalFeatureInformation';
import HorizontalLinkList from '../feature/HorizontalLinkList';
import { VerticalFeatureWorkExperience } from '../feature/VerticalFeatureWorkExperience';
import { Section } from '../layout/Section';
import Break from '../layout/Break';
import { ButtonLink } from '../layout/ButtonLink';
import { ParticleBackground } from "../particles.js"

const VerticalFeatures = ({ isDarkMode }) => {
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
              description="I am currently pursuring a Bachelor's degree in Computer Engineering, with a minor in Mathematics. It all started with a passion of understanding the fundamentals of how computers operate in high school. Since then, I have worked with UI design, full stack web development, and video game creation. I am moving towards studying Artificial Intelligence, and the benefits it can bring to workflows."
              image="/images/Burnett_Honors_College_UCF.png"
              imageAlt="Burnett's Honors College at UCF Emblem"
            />
            <Break type="oneEighth" />
            <VerticalFeatureInformation
              isDarkMode={isDarkMode}
              title1="I am researching Artificial Intelligence."
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
            <VerticalFeatureRow
              isDarkMode={isDarkMode}
              title="BlueShift"
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
              htmlFor="blueshift-drawer"
            />
            <div className="drawer" style={{ zIndex: 9999 }}>
              <input id="blueshift-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-side">
                <label htmlFor="blueshift-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-1/3 h-full bg-base-200 text-base-content border-r-4 border-black flex-nowrap overflow-auto">

                  <h3 className={`text-3xl font-semibold text-center`}>
                    BlueShift.
                  </h3>
                  <div className={`mt-6 text-l pb-4 `}>
                    Blueshift is a <i>virtual reality horror game</i> developed using the <strong>Unity</strong> game engine. You are isolated in a spacecraft setting, and must rely on evasion and scavenging to escape from an alien entity hunting you.
                  </div>

                  <Break type="oneEighth" />

                  <h3 className={`text-2xl font-semibold text-center pb-4`}>
                    Download the project!
                  </h3>
                  <div className="text-xl text-center pb-4">
                    Check out the GitHub repository.
                  </div>
                  <a href="https://github.com/CATastrophic141/Blueshift" className="hover:underline text-blue-500 text-center text-xl">Click here.</a>
                  
                  <Break type="oneEighth" />

                  <h3 className={`text-l font-semibold text-center`}>
                    This game was created as a semester project for CAP4053 - AI for Game Development. Check out the course <a href="https://www.ucf.edu/catalog/undergraduate/#/courses/Hkg745kdj_" className="hover:underline text-blue-500">here.</a>
                  </h3>

                  <Break type="oneEighth" />

                  <h3 className={`text-l font-semibold text-center`}>
                    Unity is a cross-platform game developing engine created by Unity Technologies. Check out Unity <a href="https://unity.com/" className="hover:underline text-blue-500">here.</a>
                  </h3>

                  <Break type="oneEighth" />

                  <h3 className={`text-xl font-semibold text-center pb-4`}>
                    Alien AI Description.
                  </h3>
                  <li>
                  • The alien utilizes a state machine as its governing behavior.
                  </li>
                  <li>
                  • It uses optimized raycasting, as well as audio vicinity to track the player.
                  </li>
                  <li>
                  • It is equipped with memory - a system implemented to help the alien find the player near recently-spotted locations.
                  </li>
                  <li>
                  • The player can escape from the alien only if its sightline is broken long enough, or the player hides outside its observation area.
                  </li>
                </ul>
              </div>
            </div>


          
            <VerticalFeatureRow
              isDarkMode={isDarkMode}
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
              htmlFor="fyrecracker-drawer"
              reverse
            />
            <div className="drawer drawer-end" style={{ zIndex: 9999 }}>
              <input id="fyrecracker-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-side">
                <label htmlFor="fyrecracker-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-1/3 h-full bg-base-200 text-base-content border-l-4 border-black flex-nowrap overflow-auto">
                  <h3 className={`text-3xl font-semibold text-center`}>
                    Fyrecracker.
                  </h3>
                  <div className={`mt-6 text-l pb-4 `}>
                    Fyrecracker is a fast paced PvP game developed using Unreal Engine 5. Be the last remaining player in a battle of environment demolition. Blow up a voxel-based world, and launch your friends out of the map in this rapid explosion video game!
                  </div>

                  <Break type="oneEighth" />

                  <h3 className={`text-2xl font-semibold text-center pb-4`}>
                    WORK IN PROGRESS!
                  </h3>
                  <div className="text-xl text-center pb-4">
                    Check out the GitHub repository.
                  </div>
                  <a href="https://github.com/jkglaspey/FyreCracker" className="hover:underline text-blue-500 text-center text-xl">Click here.</a>

                  <Break type="oneEighth" />

                  <h3 className={`text-l font-semibold text-center`}>
                    Fyrecracker is based off a Minecraft minigame of the same name. Check out the original project <a href="https://www.minecraftmaps.com/game-maps/fyrecracker" className="hover:underline text-blue-500">here.</a>
                  </h3>
                  
                  <Break type="oneEighth" />

                  <h3 className={`text-l font-semibold text-center`}>
                    Unreal Engine 5 is a next-generation game engine developed by Epic Games. Check out Unreal Engine <a href="https://www.unrealengine.com/en-US/unreal-engine-5" className="hover:underline text-blue-500">here.</a>
                  </h3>

                  <Break type="oneEighth" />

                  <h3 className={`text-xl font-semibold text-center pb-4`}>
                    This project will include <strong>deep learning AI agents</strong>.
                  </h3>
                  <li>
                  • Agents will be trained with reinforcement learning.
                  </li>
                  <li>
                  • Hundreds of 2-minute simulations on small specialized maps will undergo, and the last remaining AI will be given points based on the efficiency of eliminating the other agents.
                  </li>
                  <li>
                  • The agent will be fully trained through a neural network. This includes movement, firing, and strategy.
                  </li>
                  <li>
                  • The goal of providing small-scale rapid testing is to train the AI to be aggressive, as well as reinforce positive survival strategies.
                  </li>
                  <li>
                  • Check back with this project in the future. There will be a video explanation of the entire process.
                  </li>
                </ul>
              </div>
            </div>

        

            <VerticalFeatureRow
              isDarkMode={isDarkMode}
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
              htmlFor="hush-drawer"
            />
            <div className="drawer" style={{ zIndex: 9999 }}>
              <input id="hush-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-side">
                <label htmlFor="hush-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-1/3 h-full bg-base-200 text-base-content border-r-4 border-black flex-nowrap overflow-auto">

                  <h3 className={`text-3xl font-semibold text-center`}>
                    Hush UCF.
                  </h3>
                  <div className={`mt-6 text-l pb-4 `}>
                    Hush UCF is a social media app that utilizes the <i>MERN stack</i> to create a <strong>full-stack</strong> web application. The primary goal of this website is to act as a safe platform to post confessions about anything related to UCF. This project was deployed to <a href="https://www.heroku.com/platform" className="hover:underline text-blue-500 text-center">Heroku</a>, and acted as an introduction to React and React Native.
                  </div>

                  <Break type="oneEighth" />

                  <div className="text-xl text-center pb-4">
                    Check out the GitHub repository.
                  </div>
                  <a href="https://github.com/kylekww/cop-4331-mern-project" className="hover:underline text-blue-500 text-center text-xl">Click here.</a>
                  
                  <Break type="oneEighth" />

                  <h3 className={`text-l font-semibold text-center`}>
                    This game was created as a 10-week project for COP4331 - Processes of Object-Oriented Software. Check out the course <a href="http://www.cs.ucf.edu/~turgut/COURSES/COP4331C_OOD_Fall19/COP4331C_OOD_Fall19.html" className="hover:underline text-blue-500">here.</a>
                  </h3>

                  <Break type="oneEighth" />

                  <h3 className={`text-l font-semibold text-center`}>
                    The MERN stack is a full-stack framework consisting of MongoDB, Express, React.js, and Node.js. For more information, click <a href="https://mern.js.org/" className="hover:underline text-blue-500">here.</a>
                  </h3>

                  <Break type="oneEighth" />

                  <h3 className={`text-xl font-semibold text-center pb-4`}>
                    Features.
                  </h3>
                  <ul>
                    <li>
                    • Post confessions under a 280 character limit. They will persist for one week.
                    </li>
                    <li>
                    • Upvote, downvote, or reply to other confessions.
                    </li>
                    <li>
                    • Filter confessions by either the most liked or most recent.
                    </li>
                    <li>
                    • Create a profile to manage confessions. Profile IDs are not displayed on the original confession post, but they do appear on replies.
                    </li>
                  </ul>
                  • The project was fully unit tested using Jest. To find out more, click <a href="https://jestjs.io/" className="hover:underline text-blue-500">here.</a>
                </ul>
              </div>
            </div>


            <VerticalFeatureRow
              isDarkMode={isDarkMode}
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
              htmlFor="teamscripted-drawer"
              reverse
            />
            <div className="drawer drawer-end" style={{ zIndex: 9999 }}>
              <input id="teamscripted-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-side">
                <label htmlFor="teamscripted-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-1/3 h-full bg-base-200 text-base-content border-l-4 border-black flex-nowrap overflow-auto">
                  <h3 className={`text-3xl font-semibold text-center`}>
                    Team Scripted.
                  </h3>
                  <div className={`mt-6 text-l pb-4 `}>
                    I cofounded Team Scripted, a small freelance team with a goal to create quality projects within the Minecraft community. Over time, we have had several minigames submitted to Mojang's official <a href="https://www.minecraft.net/en-us/realms" className="hover:underline text-blue-500">Realms</a> collection, as well as established a community of several hundred members.
                  </div>
                  <Break type="oneEighth" />
                  <h3 className={`text-3xl font-semibold text-center pb-4`}>
                    Check out our projects!
                  </h3>
                  <Break type="oneEighth" />
                  <div className="text-2xl text-center font-semibold pb-2">
                  <a href="https://www.minecraftmaps.com/game-maps/sky-scapers" className="hover:underline text-blue-500 text-center text-xl">Sky Scapers.</a>
                  </div>
                  <div className="text-xl text-center pb-4">
                    In this fast paced minigame, fly through the skies and fire beams at your friends.
                  </div>
                  <Break type="oneEighth" />
                  <div className="text-2xl text-center font-semibold pb-2">
                  <a href="https://www.planetminecraft.com/project/rematch/" className="hover:underline text-blue-500 text-center text-xl">Rematch.</a>
                  </div>
                  <div className="text-xl text-center pb-4">
                    Scavenge a large map for resources, then convert your profits to weapons for battle in this strategic PvP minigame.
                  </div>
                  <Break type="oneEighth" />
                  <div className="text-2xl text-center font-semibold pb-2">
                  <a href="https://www.minecraftmaps.com/game-maps/sprint-racer" className="hover:underline text-blue-500 text-center text-xl">Sprint Racer.</a>
                  </div>
                  <div className="text-xl text-center pb-4">
                    Experience a racing game full of quality, features, optimizations, and years of support.
                  </div>
                  <Break type="oneEighth" />
                  <h3 className={`text-l font-semibold text-center`}>
                    Check out the StickyPiston Minecraft server hosting website. We have been joyed been working as partners with them and their community. Click <a href="https://stickypiston.co/" className="hover:underline text-blue-500">here.</a>
                  </h3>
                  <Break type="oneEighth" />
                  <h3 className={`text-l font-semibold text-center`}>
                    Minecraft provides the community with a custom scripting language, and works as an internal game engine. Due to years of being exposed to this, I have assimilated myself into the game development workflow.
                  </h3>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
};

export { VerticalFeatures };
