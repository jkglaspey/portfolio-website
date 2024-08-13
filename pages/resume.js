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
      <ParticleBackground isDarkMode={isDarkMode} />
      <Break type="oneEighth" />

      <Section
        isDarkMode={isDarkMode}
        title="Check out my Resume."
        description=""
      >
        <div className="flex justify-center items-center w-full h-[calc(100vh-2rem)]">
          <embed
            src="resume.pdf"
            type="application/pdf"
            className="w-full h-full"
          ></embed>
        </div>

        <Break type="oneEighth" />

        <ButtonLink
          title=""
          button={
            <button>
              <Link className="btn" href="/">Return to home.</Link>
            </button>
          }
        />

        <Footer isDarkMode={isDarkMode} />
      </Section>
    </div>
  );
}
