import Link from 'next/link';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { FooterIconList } from '../footer/FooterIconList';

const Footer = () => (
  <Section>
    <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
    <CenteredFooter
      iconList={(
        <FooterIconList titles={['LinkedIn', 'GitHub', 'HackerRank']}>
          <Link href="http://www.linkedin.com/in/joshua-glaspey">
            <img src="/images/footer/linkedin-logo.png" alt="LinkedIn" />
          </Link>
          <Link href="https://github.com/jkglaspey">
            <img src="/images/footer/github-logo.png" alt="GitHub" />
          </Link>
          <Link href="https://www.hackerrank.com/jkglaspey">
            <img src="/images/footer/hackerrank-logo.png" alt="HackerRank" />
          </Link>
        </FooterIconList>
      )}
    >
      Connect with me on LinkedIn!
    </CenteredFooter>
  </Section>
);

export { Footer };
