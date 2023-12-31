import React, { useState } from 'react';
import Link from 'next/link'

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import Hero from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
import { useDarkMode } from '../context/DarkModeProvider';

const Base = ({ allProjectsData }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleMode = () => {
    toggleDarkMode();
  };
  
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div>
        <nav>
          <ul>
            <li>
              <Link href="#hero" scroll={false}>
              </Link>
            </li>
            <li>
              <Link href="#introduction" scroll={false}>
              </Link>
            </li>
            <li>
              <Link href="#skills" scroll={false}>
              </Link>
            </li>
            <li>
              <Link href="#experience" scroll={false}>
              </Link>
            </li>
            <li>
              <Link href="#projects" scroll={false}>
              </Link>
            </li>
            <li>
              <Link href="#footer" scroll={false}>
              </Link>
            </li>
          </ul>
        </nav>

        <div id="hero">
          <Hero isDarkMode={isDarkMode} onToggleMode={toggleMode}/>
        </div>
        <VerticalFeatures isDarkMode={isDarkMode} allProjectsData={allProjectsData}/>
        <div id="footer">
          <Footer isDarkMode={isDarkMode}/>
        </div>
      </div>
    </div>
  );
}

export { Base };
