import React, { useState, useEffect } from 'react';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import HeroOneButton from '../hero/HeroOneButton';

const Hero = ({ isDarkMode, onToggleMode }) => {
  const [showChatBubble, setShowChatBubble] = useState(false);
  const [chatBubbleTimer, setChatBubbleTimer] = useState(null);

  const showChatForSeconds = 3;

  const handleShowChatBubble = () => {
    if (showChatBubble) {
      setShowChatBubble(false);

      setTimeout(() => {
        setShowChatBubble(true);

        if (chatBubbleTimer) {
          clearTimeout(chatBubbleTimer);
        }

        const newTimer = setTimeout(() => {
          setShowChatBubble(false);
        }, showChatForSeconds * 1000);

        setChatBubbleTimer(newTimer);
      }, 500);
    } else {
      setShowChatBubble(true);

      setTimeout(() => {
        if (chatBubbleTimer) {
          clearTimeout(chatBubbleTimer);
        }

        const newTimer = setTimeout(() => {
          setShowChatBubble(false);
        }, showChatForSeconds * 1000);

        setChatBubbleTimer(newTimer);
      }, 500);
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
          {/* Add a top navigation bar here if you want to */}
        </Section>

        {/* Top Links (if included) (game links, resume, table of contents) */}

        {/* Center Icon Button */}
        <Section 
          isDarkMode={isDarkMode}
          yPadding="pt-20 pb-32">
          <div className="grid grid-cols-3 w-full h-full justify-between items-center">
            {/* First element. Just left of the center element */}
            <div className="chat chat-end">
              {showChatBubble && (
                <div className={`chat-bubble bg-gray-700 text-white animate-typing`}>
                  {isDarkMode ? "That is much better." : "Wow, that is bright..."}
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
