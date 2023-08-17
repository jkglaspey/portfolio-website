import React from 'react';
import Link from 'next/link'
import { Section } from '../components/layout/Section';
import Break from '../components/layout/Break';
import { Footer } from '../components/templates/Footer';
import { ButtonLink } from '../components/layout/ButtonLink';
import { ParticleBackground } from "../components/particles.js"
import { useDarkMode } from '../components/context/DarkModeProvider';
import PDFViewer from '../components/utils/PDFViewer';

export default function About() {

  const { isDarkMode } = useDarkMode();

    return (
      <div id="background">
        <ParticleBackground isDarkMode={isDarkMode}/>
        <Break type="oneEighth" />

        <Section
          isDarkMode={isDarkMode}
          title="Check out my resume."
          description=""
        >
          <PDFViewer pdfUrl="/resume.pdf" />

          <ButtonLink
            title=""
            button={
              <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-700 rounded active:bg-amber-600 active:shadow-[0_8px_9px_-4px_rgba(180,83,9,0.4),0_4px_18px_0_rgba(180,83,9,0.3)]">
                <Link href="/">Return to home.</Link>
              </button>
            }
          />


          <Footer isDarkMode={isDarkMode}/>
        </Section>
      </div>
    );
  }