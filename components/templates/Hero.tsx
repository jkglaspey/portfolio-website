import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import HeroOneButton from '../hero/HeroOneButton';

const Hero = ({ isDarkMode, onToggleMode }) => {
  const [showChatBubble, setShowChatBubble] = useState(false);
  const [chatBubbleTimer, setChatBubbleTimer] = useState<NodeJS.Timeout | null>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    toggleMenu();
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const showChatForSeconds = 3;

  const handleShowChatBubble = () => {
    if (showChatBubble) {
      setShowChatBubble(false);

      if (chatBubbleTimer) {
        clearTimeout(chatBubbleTimer);
      }

      const newTimer = setTimeout(() => {
        setShowChatBubble(true);

        const newTimer = setTimeout(() => {
          setShowChatBubble(false);
        }, showChatForSeconds * 1000);

        setChatBubbleTimer(newTimer);
      }, 500);

      setChatBubbleTimer(newTimer);
    } else {
      setShowChatBubble(true);

      if (chatBubbleTimer) {
        clearTimeout(chatBubbleTimer);
      }

      const newTimer = setTimeout(() => {
        setShowChatBubble(false);
      }, showChatForSeconds * 1000);

      setChatBubbleTimer(newTimer);
    }
  };

  return (
    <div>
      {/* Background gradient */}
      <Background color={`h-screen bg-gradient-to-b ${isDarkMode ? 'from-amber-800 to-gray-900' : 'from-amber-800 to-white'} transition-all duration-5000 ease-in-out`}>

        <Section 
          isDarkMode={isDarkMode}
          yPadding="py-6"
        >
          
          <div className="flex flex-wrap items-center justify-between">
            <nav>
              <ul className={`navbar flex items-center text-xl font-medium bg-gray-600 bg-opacity-50 rounded-box pd-2 ${menuVisible ? 'w-[calc(115%)]' : 'w-auto'} `}>
                <div className="flex items-center text-white text-xl relative">
                  <img
                    src="/images/arrow.png"
                    alt="Arrow icon."
                    onClick={toggleMenu}
                    className={`cursor-pointer writespace-nowrap flex w-10 hover:scale-125 ${menuVisible ? '' : 'rotate-90'}`}
                  />

                  <div
                    className={`flex flex-row pl-[5%] writespace-nowrap ${
                      menuVisible ? 'fade-in-right' : 'hidden'
                    }`}
                  >
                    <div className="dropdown dropdown-hover whitespace-nowrap">
                      <label
                        tabIndex={0}
                        className="m-1 text-xl font-semibold text-white hover:underline"
                      >
                        Navigate this page.
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-auto"
                      >
                        <li>
                          <Link href="/#introduction" className="text-gray-600">
                            My introduction.
                          </Link>
                        </li>
                        <li>
                          <Link href="/#skills" className="text-gray-600">
                            My skills.
                          </Link>
                        </li>
                        <li>
                          <Link href="/#experience" className="text-gray-600">
                            My experience.
                          </Link>
                        </li>
                        <li>
                          <Link href="/#projects" className="text-gray-600">
                            My projects.
                          </Link>
                        </li>
                        <li>
                          <Link href="/#footer" className="text-gray-600">
                            Contact me.
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="pr-[5%] pl-[5%]"> | </div>

                    <div className="dropdown dropdown-hover whitespace-nowrap w-auto">
                      <label
                        tabIndex={0}
                        className="m-1 text-xl font-semibold text-white hover:underline"
                      >
                        Other pages.
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-auto"
                      >
                        <li>
                          <Link href="/about" className="text-gray-600">
                            About me.
                          </Link>
                        </li>
                        <li>
                          <Link href="/resume" className="text-gray-600">
                            My Resume.
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </nav>
            <style jsx>
              {`
                .fade-in-right {
                  animation: fade-in-right 0.5s ease-in-out;
                }

                @keyframes fade-in-right {
                  0% {
                    opacity: 0;
                    transform: translateX(-1.1em);
                  }
                  100% {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }
              `}
            </style>
          </div>

          
        </Section>

        {/* Center Icon Button */}
        <Section 
          isDarkMode={isDarkMode}
          yPadding="pt-20 pb-32">
          <div className="grid grid-cols-3 w-full h-full justify-between items-center">
            {/* First element. Just left of the center element */}
            <div className="chat chat-end">
              {showChatBubble && (
                <div className={`chat-bubble bg-gray-700 text-white animate-typing`}>
                  {isDarkMode ? "That's easier on the eyes." : "Wow, that is bright..."}
                </div>
              )}
            </div>

            {/* Second element. Centered on the page */}
            <div className="col-span-1 flex-col flex items-center">
              <HeroOneButton onToggleMode={onToggleMode} onShowChatBubble={handleShowChatBubble}/>
            </div>
          </div>
        </Section>
      </Background>
    </div>
  );
};

export default Hero;
