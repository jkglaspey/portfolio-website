import Link from 'next/link';
import React from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => {
  return (
    <div>

      {/* Background gradient */}
      <Background color="h-screen bg-gradient-to-b from-amber-800 to-gray-900">


        <Section yPadding="py-6">
          <NavbarTwoColumns logo="">
          </NavbarTwoColumns>
        </Section>

        {/* Top Links (if included) (game links, resume, table of contents) */}

        {/* Center Icon Button */}
        <Section yPadding="pt-20 pb-32">
          <HeroOneButton
            button={
              <Link href="https://creativedesignsguru.com/category/nextjs/">
                <Button xl>Download Your Free Theme</Button>
              </Link>
            }
          />
        </Section>
      </Background>
    </div>
  )
};

export { Hero };
