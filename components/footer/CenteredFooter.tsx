import type { ReactNode } from 'react';
import { FooterCopyright } from './FooterCopyright';
import Break from '../layout/Break';
import { SendEmail } from '../templates/SendEmail';

type ICenteredFooterProps = {
  iconList: ReactNode;
  children: ReactNode;
  isDarkMode?: boolean;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center justify-center">
    <nav>
      <ul className={`navbar mt-5 flex flex-row justify-center text-2xl font-semibold ${props.isDarkMode ? "text-white" : "text-gray-900"}`}>
        {props.children}
      </ul>
    </nav>

    <div className="mt-8 flex justify-center">
      {props.iconList}
    </div>

    <Break type="oneFourth" />
    {/* If you want to add email direct contact (with API), modify <SendEmail />*/}

    <div className={`text-xl ${props.isDarkMode ? "text-white" : "text-gray-900"}`}>
        Or reach out to me via email. 📧
    </div>
    <div className={`text-l ${props.isDarkMode ? "text-white" : "text-gray-900"}`}>
        Ask me anything! Just let me know you came from my website. 😁
    </div>
    <div className={`mt-5 text-2xl font-semibold ${props.isDarkMode ? "text-white" : "text-gray-900"}`}>
        jkglaspey@gmail.com
    </div>

    <Break type="oneFourth" />

    <div className="mt-8 text-sm">
      <FooterCopyright 
        isDarkMode={props.isDarkMode}
      />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
