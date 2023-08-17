import Link from 'next/link';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { FooterIconList } from '../footer/FooterIconList';

const Footer = ({ isDarkMode }) => (
  <Section>
    <hr className={`my-12 h-0.5 border-t-0 ${isDarkMode ? "bg-white" : "bg-gray-900"} opacity-100 dark:opacity-50`} />
    <CenteredFooter
      isDarkMode={isDarkMode}
      iconList={(
        <FooterIconList 
          isDarkMode={isDarkMode}
          titles={['LinkedIn', 'GitHub', 'HackerRank']}>
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
      <div className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
        Connect with me on LinkedIn!
      </div>
    </CenteredFooter>
  </Section>
);

export { Footer };
