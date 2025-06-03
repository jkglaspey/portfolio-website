import React from 'react';
import Link from 'next/link'
import { Section } from '../components/layout/Section';
import Break from '../components/layout/Break';
import { Footer } from '../components/templates/Footer';
import { ButtonLink } from '../components/layout/ButtonLink';
import { ParticleBackground } from "../components/particles.js"
import { useDarkMode } from '../components/context/DarkModeProvider';
//import useSWR from 'swr';

//const fetcher = (url) => fetch(url).then((res) => res.json());

export default function About() {
  const { isDarkMode } = useDarkMode();

  //const { data, error } = useSWR('/api/staticdata', fetcher);
  //if (error) return <div>Failed to load</div>;
  //if (!data) return <div>Loading...</div>;

    return (
      <div id="background">
        <ParticleBackground isDarkMode={isDarkMode}/>
        <Break type="oneEighth" />

        <div className="mx-auto max-w-screen-xl">
          <img
            src="/images/about/waterfall.jpg"
            alt="Photo of myself in front of a waterfall."
            className="w-1/2 mx-auto rounded"
          />
        </div>

        <Section
          isDarkMode={isDarkMode}
          title="My name is Joshua Glaspey."
          description="Here is a little bit about me."
        >
          <hr className={`my-12 h-0.5 border-t-0 ${isDarkMode ? "bg-white" : "bg-gray-900"} opacity-100 dark:opacity-50`} />

          <div className="mt-20 flex flex-wrap items-center">
            <div className="w-full sm:w-2/3 sm:px-6">
              <h3 className={`text-3xl text-center font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Who am I?
              </h3>
              <div className={`mt-6 text-xl leading-9 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              I'm Joshua Glaspey, a recent graduate with a Master's degree in <strong>Computer Engineering</strong> from the University of Central Florida, where I specialized in <strong>Intelligent Systems and Machine Learning.</strong> I previously completed my Bachelor's in Computer Engineering, along with a minor in Mathematics through <i>UCF's honors program.</i> My academic journey has centered around building AI systems - whether through <i>deep learning</i> or <i>computer vision</i> - to solve real-world problems. I'm drawn to projects that blend creativity with technical depth, especially when they aim to make software more intuitive and impactful.
              </div>
            </div>
            <div className="w-full sm:w-1/3 relative">
              <div className="inset-0 flex items-center justify-center">
                <img
                  src="/images/about/grad.png"
                  className="w-max h-auto max-w-full object-cover rounded-lg"
                  alt="A professional photo of myself."
                />
              </div>
            </div>
          </div>
          <Break type="oneEighth" />
          

          <div className="mt-20 flex flex-wrap items-center flex-row-reverse">
            <div className="w-full sm:w-2/3 sm:px-6">
              <h3 className={`text-3xl text-center font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                How did I get here?
              </h3>
              <div className={`mt-6 text-xl leading-9 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Read about how tennis has built me into the person I am today.
              </div>
              <ButtonLink
                title=""
                button={
                  <button>
                    <label htmlFor="tennis-drawer" className="btn drawer-button">
                      Click here.
                    </label>
                  </button>
                }
              />

              <div className="drawer drawer-end" style={{ zIndex: 9999 }}>
                <input id="tennis-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                  <label htmlFor="tennis-drawer" className="drawer-overlay"></label>
                  <ul className="menu p-4 w-2/3 h-full bg-base-200 text-base-content border-r-4 border-black flex-nowrap overflow-auto">

                    <h3 className={`text-3xl font-semibold text-center`}>
                      My tennis journey.
                    </h3>
                    <div className={`mt-6 text-l pb-4 `}>
                         
{
[{
  text: "\u2003\u2003\u2003\u2003From a young age, sports have always been a big part of who I am. I started with soccer in kindergarten, but somewhere in elementary school, I found myself hooked on baseball. Then came track—first in elementary, then middle school. But the sport that truly stuck, the one that kept calling me back, was tennis."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003I'm the youngest of three brothers, and like me, they both picked up tennis early on. So naturally, I followed in their footsteps, starting when I was eight. At first, I was placed in the lower-level group because of my age and lack of experience. But with that familiar sibling rivalry kicking in, I made it my mission to catch up—and eventually outplay—them."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003That drive led me through countless local tournaments, many of them hours away. Over time, I filled a shelf with trophies—physical proof that I was getting better. But as the years went on, my regular hitting partners moved on, and it became harder to keep the same passion alive."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003Even so, high school brought a new energy. Playing on a team with my brother was something special. During my first year, we shocked everyone with a string of upsets and made it all the way to the state championships. We lost early, but that run reminded me how much I still cared about the game."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003After my brothers left for college, I found myself training alone more and more. Wanting to keep improving, I made a big decision—with my parents’ support, I moved to a more competitive tennis facility. Training got tougher, my fitness ramped up, and I was clearly getting stronger. But it came with sacrifices: I gave up time with friends, clubs, and just being a regular high school kid."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003That commitment made me think about taking tennis even further—maybe even professionally. College recruiters weren’t exactly lining up, but when I made it to the state tournament, I thought I had a shot at getting noticed. I kept that hope alive right through the final matches of my high school career."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003But then COVID hit, and everything changed. Tournaments shut down, practices stopped, and the momentum I had built just evaporated. I was stuck at home, losing weight and motivation, not sure what came next."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003Eventually, I found a new direction. I enrolled at the University of Central Florida with a focus on technology—something I had grown to love through years of gaming and tinkering during tennis trips. At first, I leaned into Virtual Reality, but my path shifted toward Artificial Intelligence. Still, through it all, I kept telling myself that no matter what, I wasn’t done with tennis."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003UCF gave me a second chance at competitive tennis. I joined the club team and quickly found my place among other students who took both school and tennis seriously. We traveled all across Florida competing, and over time, I stepped into a leadership role. Junior year, I made the top roster, and we pushed all the way to nationals—finishing 12th in the country. It was a huge redemption arc for me, and a reminder of how far I’d come."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003In the big picture, tennis has shaped who I am. It taught me how to lead, how to handle setbacks, and how to stay grounded. I’m so thankful to my parents for supporting me, and for showing me what it means to treat people with kindness. But I also give credit to myself—for sticking with it through every low point and for turning those moments into fuel."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003The road hasn't always been smooth. Tennis—like life—throws curveballs. Sometimes you're on the wrong side of the scoreboard. But I’ve learned how to bounce back, stay motivated, and keep going, no matter what."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003We made it to nationals three times—each one unforgettable. Our second appearance, in Surprise, Arizona, felt like a personal redemption arc. After everything I’d gone through, finishing 12th in the country was proof to myself that I still had it. Then came our third nationals in Rome, Georgia. We placed 18th this time, and I played the deciding match—it all came down to one match point, and I couldn’t close it out. That loss hit hard. But it also taught me more than any win could. I learned how to lead through pressure, how to carry a team when it counts, and how to walk off the court proud of the fight I gave."
}].map((paragraph, index) => (
    <p key={index}>{paragraph.text}</p>
))}

                    </div>
                  </ul>
                </div>
              </div>

            </div>
            <div className="w-full sm:w-1/3 relative">
              <div className="inset-0 flex items-center justify-center">
                <img
                  src="/images/about/old-image.png"
                  className="w-max h-auto max-w-full object-cover rounded-lg"
                  alt="An older picture of myself representing my high school tennis team."
                />
              </div>
            </div>
          </div>
          <Break type="oneEighth" />



          <div className="mt-20 flex flex-wrap items-center">
            <div className="w-full sm:w-2/3 sm:px-6">
              <h3 className={`text-3xl text-center font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Where do my interests lie?
              </h3>
              <div className={`mt-6 text-xl leading-9 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              I'm interested in building <strong>artificially intelligent systems</strong> that make interacting with technology easier, more efficient, and more human. I've worked on projects that <i>align audio with text</i> using large language models, <i>detect sarcasm</i> through contradictory patterns, analyze patterns and motion in real-time using <i>computer vision</i>, among many others. Whether its automating workflows, or designing models that accept human language or computer vision as input, I'm drawn to the intersection of AI, usability, and thoughtful software design.
              </div>
            </div>
            <div className="w-full sm:w-1/3 relative">
              <div className="inset-0 flex items-center justify-center">
                <img
                  src="/images/about/intern.png"
                  className="w-max h-auto max-w-full object-cover rounded-lg"
                  alt="A picture of myself holding up a #intern banner."
                />
              </div>
            </div>
          </div>
          <Break type="oneEighth" />



          <div className="mt-20 flex flex-wrap items-center flex-row-reverse">
            <div className="w-full sm:w-2/3 sm:px-6">
              <h3 className={`text-3xl text-center font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                What are my values?
              </h3>
              <div className={`mt-6 text-xl leading-9 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              My strongest values are <strong>integrity</strong> and <strong>grit</strong>. I was always the person to do the extra work when it was not necessary, in both my academic and tennis journeys. As a result, I have gained a reputation as being someone who can be counted on. By putting in the extra mile, I have been able to learn and grow, and I do not hesitate to extend a hand to people who need it. I believe that it is <i>honest work</i> and <i>perserverence</i> that leads to progress, not just intelligence.
              </div>
            </div>
            <div className="w-full sm:w-1/3 relative">
              <div className="inset-0 flex items-center justify-center">
                <img
                  src="/images/about/inspiration-picture.jpg"
                  className="w-max h-auto max-w-full object-cover rounded-lg"
                  alt="A shot of myself giving strategy for a tennis point."
                />
              </div>
            </div>
          </div>
          <Break type="oneEighth" />

          <ButtonLink
            title=""
            button={
              <button>
                <Link className="btn" href="/">Return to home.</Link>
              </button>
            }
          />


          <Footer isDarkMode={isDarkMode}/>
          <div className={`text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Theme provided by{' '}
            <a className="footer-copyright no-underline hover:underline" href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
          </div>
          <div className={`text-center ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            <a href="https://www.flaticon.com/free-icons/virtual-fitness" title="virtual fitness icons">Virtual fitness icons created by Freepik - Flaticon</a>
          </div>
        </Section>

        
      </div>
    );
  }