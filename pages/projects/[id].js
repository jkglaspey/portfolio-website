import { getAllProjectIds, getProjectData } from '../../lib/projects';
import Head from 'next/head';
import { useDarkMode } from '../../components/context/DarkModeProvider';
import { ParticleBackground } from "../../components/particles.js"
import Carousel from '../../components/carousel/Carousel';
import Break from '../../components/layout/Break';

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id);
    return {
        props: {
            projectData,
        },
    };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectData }) {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const toggleMode = () => {
        toggleDarkMode();
    };


    return (
        <div>
            <Head>
                {projectData.title}
            </Head>
            
            <article className={`p-8 sm:p-20 flex flex-col items-center justify-center relative ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                <div id="background" className={`w-full h-1/3`}>
                    <ParticleBackground isDarkMode={isDarkMode}/>
                </div>
                <div className="w-full h-1/3">
                    <div style={{ height: '100%' }}>
                    <Carousel images={projectData.images.map((image) => `/images/${image}`)} imageAlts={projectData.alts}/>
                    </div>
                </div>
                <h3 className={`text-3xl font-semibold text-center mt-4`}>
                    {projectData.title}
                </h3>
                <hr className={`my-8 h-0.5 w-2/3 sm:w-1/2 border-t-0 ${isDarkMode ? "bg-white" : "bg-gray-900"} opacity-100 dark:opacity-50`} />
                <div>
                    <Date dateString={projectData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}/>
            </article>

        </div>
    );
  }