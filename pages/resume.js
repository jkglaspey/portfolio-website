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

        <Section
          isDarkMode={isDarkMode}
          title="Check out my Resume."
          description=""
        >
          <div className={`flex justify-center text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Want to download a copy?
          </div>
          <Link className={`flex justify-center text-xl text-blue-500 hover:underline active:text-purple-500`} href="https://drive.google.com/file/d/1M6sUER2GKrtMKolRgVfF32Vppun4aXsB/view?usp=sharing">
            Click here.
          </Link>
          
          
          <Break type="oneEighth" />
          <img
            className={`object-scale-down max-h-min m-auto ${isDarkMode? '' : 'border-single border-2 border-gray-900'}`}
            src="images/Resume-Joshua_Glaspey.png"
            alt="Joshua Glaspey's Resume"
          />

          <ButtonLink
            title=""
            button={
              <button>
                <Link className="btn" href="/">Return to home.</Link>
              </button>
            }
          />


          <Footer isDarkMode={isDarkMode}/>
        </Section>
      </div>
    );
  }