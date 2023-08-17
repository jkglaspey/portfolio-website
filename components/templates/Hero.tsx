import React from 'react';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import HeroOneButton from '../hero/HeroOneButton';

const Hero = ({ isDarkMode, onToggleMode }) => {
  return (
    <div>
      {/* Background gradient */}
      <Background color={`h-screen bg-gradient-to-b ${isDarkMode ? 'from-amber-800 to-gray-900' : 'from-amber-800 to-white'} transition-all duration-5000 ease-in-out`}>

        <Section 
          isDarkMode={isDarkMode}
          yPadding="py-6">
          {/* Pass isDarkMode to Navbar */}
        </Section>

        {/* Top Links (if included) (game links, resume, table of contents) */}

        {/* Center Icon Button */}
        <Section 
          isDarkMode={isDarkMode}
          yPadding="pt-20 pb-32">
          <HeroOneButton onToggleMode={onToggleMode} />
        </Section>
      </Background>
    </div>
  );
};

export default Hero;
