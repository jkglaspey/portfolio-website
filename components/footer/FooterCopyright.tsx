import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = ({ isDarkMode }) => (
  <div className={`footer-copyright ${isDarkMode ? "text-white" : "text-gray-900"}`}>
    © Copyright {new Date().getFullYear()} {AppConfig.title}.
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
