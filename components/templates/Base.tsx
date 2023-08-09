import React from 'react';
import { Element } from "react-scroll";

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Element name="hero">
      <Hero />
    </Element>
    <Element name="verticalfeatures">
      <VerticalFeatures />
    </Element>
    <Element name="banner">
      <Banner />
    </Element>
    <Element name="footer">
      <Footer />
    </Element>
  </div>
);

export { Base };
