import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const SendEmail = () => (
  <Section>
    <CTABanner
      title="Or send me an email!"
      subtitle="Feel free to ask any questions."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>This will be changed lol.</Button>
        </Link>
      }
    />
  </Section>
);

export { SendEmail };
