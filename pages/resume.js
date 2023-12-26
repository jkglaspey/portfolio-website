import React from 'react';
import Link from 'next/link'
import { Section } from '../components/layout/Section';
import Break from '../components/layout/Break';
import { Footer } from '../components/templates/Footer';
import { ButtonLink } from '../components/layout/ButtonLink';
import { ParticleBackground } from "../components/particles.js"
import { useDarkMode } from '../components/context/DarkModeProvider';
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

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
          <EmbedPDF>
            <a href='https://zgglvuqw.simplepdf.eu/form/ed9b4a0e4b2603dc8595d0bc02ba8f1d816ee7c3a2a546ab4713568db8bb94ca'>
              <div className={`flex justify-center text-xl hover:underline ${isDarkMode ? 'text-blue-500' : 'text-blue-600'}`}>
                Click here.
              </div>
            </a>
          </EmbedPDF>
          <Break type="oneEighth" />

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