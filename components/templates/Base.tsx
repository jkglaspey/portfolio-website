import React from 'react';
import Link from 'next/link'

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
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
            <Link href="#features" scroll={false}>
            </Link>
          </li>
          <li>
            <Link href="#banner" scroll={false}>
            </Link>
          </li>
          <li>
            <Link href="#footer" scroll={false}>
            </Link>
          </li>
        </ul>
      </nav>

      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <VerticalFeatures />
      </div>
      <div id="banner">
        <Banner />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  </div>
);

export { Base };
