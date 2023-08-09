import Link from 'next/link';
import React from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { scroller } from 'react-scroll';
import { Logo } from './Logo';

const Hero = () => {
  const scrollToNextComponent = () => {
    scroller.scrollTo('verticalfeatures', {
      duration: 1000,
      smooth: true,
    });
  };

  return (
      <Background color="min-h-screen bg-gradient-to-b from-amber-700 to-gray-900">
        <Section yPadding="py-6">
        <button onClick={scrollToNextComponent}>Scroll Down</button>
          <NavbarTwoColumns logo="">
            <li>
              <Link href="https://github.com/jkglaspey/portfolio-website">
                Check out this project on Github!
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>

        <Section yPadding="pt-20 pb-32">
          <HeroOneButton
            title={
              <>
                {'\n'}
                <span className="text-primary-500">React developers</span>
              </>
            }
            description="The easiest way to build a React landing page in seconds."
            button={
              <Link href="https://creativedesignsguru.com/category/nextjs/">
                <Button xl>Download Your Free Theme</Button>
              </Link>
            }
          />
        </Section>
      </Background>
  )
};

export { Hero };
