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
            src="/images/self-pictures/1.jpg"
            alt="Photo of myself in front of the TOC National Championships banner (2023)."
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
              I am a college student enrolled in the Burnett's Honors College at the University of Central Florida. Computers have always intrigued me, and I am on a mission to not only demystify their inner workings, but innovate it. Currently, I'm pursuing a Bachelor's degree in <strong>Computer Engineering</strong> with a minor in <i>Mathematics.</i> In this pursuit, I've put my skills to practical use, applying statistical analysis to gain industry experience. On top of it all, I am diving into a Master's program for <strong>Intelligent Systems and Machine Learning.</strong>
              </div>
            </div>
            <div className="w-full sm:w-1/3 relative">
              <div className="inset-0 flex items-center justify-center">
                <img
                  src="/images/about/professional-picture.png"
                  className="w-max h-auto max-w-full object-cover rounded-lg"
                  alt="A professional mugshot of myself."
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
                         
{[{
  text: "\u2003\u2003\u2003\u2003From my earliest days, sports have woven themselves into the fabric of my identity. Kindergarten introduced me to soccer, but as the chapters of my elementary school years turned, my heart found a rhythm in baseball. Middle school ushered in my tenure as a track athlete, a path I treaded both in elementary and middle school. However, it was tennis that struck the deepest chord within me."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003I come from a trio of siblings, two brothers who, much like me, felt the magnetic pull of tennis. It was a matter of time before I also began my journey with a racket – at the young age of eight. Unfortunately, I began under the shadow of my brothers, as my age and experience limited me to the lower performance group. Yet, an unwritten law of sibling rivalry whispered that I'd soon surpass my older brothers through the fierce crucible of competition."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003And so, it unfolded. The tapestry of local tournaments, often hours away from home, bore testament to my determination. Through many, many competitions, I collected a shelf of trophies, which stood as my proof of improvement. Yet, as years flew by, my practice partners dwindled, and the resonance of my passion waned."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003Despite the waning enthusiasm, a new chapter beckoned. High school introduced the arena of team matches, where my brother and I rode the charge of leadership. Unexpectedly, in my first try, we pulled off a hat trick of upsets, propelling us into the state championships. It was a locally recognized honor that reignited my dedication to the sport. Although we were beaten in the opening round, the fire within me was rekindled."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003As time elapsed, my siblings embarked on their college journeys, leaving me alone on the court. I wished to continue my improvements, but the lack of training partners led to a bold decision. With support from my parents, I committed to a new schedule at a more prestigious tennis facility. The dividends were apparent – heightened endurance and intensified training sessions painted a portrait of progress. However, sacrifices were inevitable, as I gave up personal time for school clubs and casual teenage shenanigans."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003My pursuit drove an idea into my head: to take my talent to my career and compete as a professional. While college recruiters never gave notice to my skills, the high school state competition presented me with a glimmer of hope. Through this final chapter, I held the ambition of making noise loud enough to be heard by these recruiters."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003However, destiny interjected in the form of the Covid-19 pandemic. The world abruptly spun into isolation, and my dreams were deferred. This led to several months of desolation, unhealthy weight loss, and lethargy."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003But from the ashes of adversity, my resilience emerged. I saw a new vision at the University of Central Florida, where I could chase after a new passion for technology. I had spent years traveling statewide for competitions, so I found a love in using video games to pass the time. So, after strong self-reflection, I found a part of me that wanted to follow a similar path. At first, I was captivated by Virtual Reality, yet the journey steered left towards the realms of Artificial Intelligence. Nevertheless, my personal belief lingered – to become the best version of myself as a tennis player."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003College welcomed me with open arms. Engaging with the university's club tennis team provided a blend of competition and camaraderie. These teams, a haven for academically focused athletes, resonated with my aspirations. Once again, I could take the thrill of match play throughout the state of Florida. This beckoned me to a role in leadership, and I seized it along with a first-aid certification. Junior year saw me on the premier team, triumphing in state competitions that paved the way to nationals. There, amid fierce battles, we secured a commendable 12th rank, a testament to both mine and my team’s collective effort. Truly, this acted as a personal redemption."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003In the tapestry of my life, tennis stands as both muse and mentor. Its lessons have shaped my character – leadership, tenacity, and humility. I credit my parents for embodying unwavering compassion and giving me my values of respect and compassion. But I also credit myself, for without the journey I've undertaken, I wouldn't possess the strength of character I have today."
},
{
  text: "\u2003"
},
{
  text: "\u2003\u2003\u2003\u2003Life's journey isn't linear; it's a dance with adversity. Just as an opponent's curveball or a fierce kick serve can catch one off guard, life's trials can stagger even the most determined. Yet, I've discovered the power to rebound, to harness motivation from the unlikeliest sources."
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
              I'm deeply passionate about <strong>artificial intelligence,</strong> particularly its potential to boost productivity by replicating human-like thinking for practical tasks. I'm also captivated by modern machine learning techniques like expert systems, evolutionary computation, and reinforcement learning. My appreciation extends to <strong>mathematics and data analysis.</strong> Moreover, I'm intrigued by advancements in <i>Mixed Reality</i> technology, especially how <strong>Augmented Reality</strong> can break language barriers and assist in real-world navigation. Lastly, I've actively pursued my love for tennis for over a decade.
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
                  src="/images/about/flag-picture.jpg"
                  className="w-max h-auto max-w-full object-cover rounded-lg"
                  alt="A picture of myself holding up a UCF flag."
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