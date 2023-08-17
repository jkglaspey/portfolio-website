import React from 'react';
import Link from 'next/link'
import { Section } from '../components/layout/Section';
import Break from '../components/layout/Break';
import { Footer } from '../components/templates/Footer';
import { ButtonLink } from '../components/layout/ButtonLink';
import { ParticleBackground } from "../components/particles.js"
import { useDarkMode } from '../components/context/DarkModeProvider';

export default function About() {

  const { isDarkMode } = useDarkMode();

    return (
      <div id="background">
        <ParticleBackground isDarkMode={isDarkMode}/>
        <Break type="oneEighth" />

        <div className="mx-auto max-w-screen-xl">
          <img
            src="/images/self-pictures/1.jpg"
            alt="Photo of myself in front of the TOC National Championships banner (2023)."
            className="w-1/2 mx-auto rounded"
          />
        </div>

        <Section
          isDarkMode={isDarkMode}
          title="My name is Joshua Glaspey."
          description="Here is a little bit about me."
        >
          <hr className={`my-12 h-0.5 border-t-0 ${isDarkMode ? "bg-white" : "bg-gray-900"} opacity-100 dark:opacity-50`} />

          <div className="mt-20 flex flex-wrap items-center">
            <div className="w-full sm:w-2/3 sm:px-6">
              <h3 className={`text-3xl text-center font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Who am I?
              </h3>
              <div className={`mt-6 text-xl leading-9 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              I am a college student enrolled in the Burnett's Honors College at the University of Central Florida. Computers have always intrigued me, and I am on a mission to not only demystify their inner workings, but innovate it. Currently, I'm pursuing a Bachelor's degree in <strong>Computer Engineering</strong> with a minor in <i>Mathematics.</i> In this pursuit, I've put my skills to practical use, applying statistical analysis to gain industry experience. On top of it all, I am diving into a Master's program for <strong>Intelligent Systems and Machine Learning.</strong>
              </div>
            </div>
            <div className="w-full sm:w-1/3 relative">
              <div className="inset-0 flex items-center justify-center">
                <img
                  src="/images/about/professional-picture.png"
                  className="w-max h-auto max-w-full object-cover rounded-lg"
                  alt="A professional mugshot of myself."
                />
              </div>
            </div>
          </div>
          <Break type="oneEighth" />
          

          <div className="mt-20 flex flex-wrap items-center flex-row-reverse">
            <div className="w-full sm:w-2/3 sm:px-6">
              <h3 className={`text-3xl text-center font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                How did I get here?
              </h3>
              <div className={`mt-6 text-xl leading-9 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Read about how tennis has built me into the person I am today.
              </div>
              <ButtonLink
                title=""
                button={
                  <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-700 rounded active:bg-amber-600 active:shadow-[0_8px_9px_-4px_rgba(180,83,9,0.4),0_4px_18px_0_rgba(180,83,9,0.3)]">
                    Click here.
                  </button>
                }
              />
            </div>
            <div className="w-full sm:w-1/3 relative">
              <div className="inset-0 flex items-center justify-center">
                <img
                  src="/images/about/old-image.png"
                  className="w-max h-auto max-w-full object-cover rounded-lg"
                  alt="An older picture of myself representing my high school tennis team."
                />
              </div>
            </div>
          </div>
          <Break type="oneEighth" />



          <div className="mt-20 flex flex-wrap items-center">
            <div className="w-full sm:w-2/3 sm:px-6">
              <h3 className={`text-3xl text-center font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Where do my interests lie?
              </h3>
              <div className={`mt-6 text-xl leading-9 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              I'm deeply passionate about <strong>artificial intelligence,</strong> particularly its potential to boost productivity by replicating human-like thinking for practical tasks. I'm also captivated by modern machine learning techniques like expert systems, evolutionary computation, and reinforcement learning. My appreciation extends to <strong>mathematics and data analysis.</strong> Moreover, I'm intrigued by advancements in <i>Mixed Reality</i> technology, especially how <strong>Augmented Reality</strong> can break language barriers and assist in real-world navigation. Lastly, I've actively pursued my love for tennis for over a decade.
              </div>
            </div>
            <div className="w-full sm:w-1/3 relative">
              <div className="inset-0 flex items-center justify-center">
                <img
                  src="/images/about/inspiration-picture.jpg"
                  className="w-max h-auto max-w-full object-cover rounded-lg"
                  alt="A shot of myself giving strategy for a tennis point."
                />
              </div>
            </div>
          </div>
          <Break type="oneEighth" />



          <div className="mt-20 flex flex-wrap items-center flex-row-reverse">
            <div className="w-full sm:w-2/3 sm:px-6">
              <h3 className={`text-3xl text-center font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                What are my values?
              </h3>
              <div className={`mt-6 text-xl leading-9 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              My strongest values are <strong>integrity</strong> and <strong>grit</strong>. I was always the person to do the extra work when it was not necessary, in both my academic and tennis journeys. As a result, I have gained a reputation as being someone who can be counted on. By putting in the extra mile, I have been able to learn and grow, and I do not hesitate to extend a hand to people who need it. I believe that it is <i>honest work</i> and <i>perserverence</i> that leads to progress, not just intelligence.
              </div>
            </div>
            <div className="w-full sm:w-1/3 relative">
              <div className="inset-0 flex items-center justify-center">
                <img
                  src="/images/about/flag-picture.jpg"
                  className="w-max h-auto max-w-full object-cover rounded-lg"
                  alt="A picture of myself holding up a UCF flag."
                />
              </div>
            </div>
          </div>
          <Break type="oneEighth" />

          <ButtonLink
            title=""
            button={
              <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-700 rounded active:bg-amber-600 active:shadow-[0_8px_9px_-4px_rgba(180,83,9,0.4),0_4px_18px_0_rgba(180,83,9,0.3)]">
                <Link href="/">Return to home.</Link>
              </button>
            }
          />


          <Footer isDarkMode={isDarkMode}/>
          <div className={`text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Theme provided by{' '}
            <a className="footer-copyright no-underline hover:underline" href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
          </div>
        </Section>

        
      </div>
    );
  }