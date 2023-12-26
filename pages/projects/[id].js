import Link from 'next/link'
import { getAllProjectIds, getProjectData } from '../../lib/projects';
import Head from 'next/head';
import { useDarkMode } from '../../components/context/DarkModeProvider';
import { ParticleBackground } from "../../components/particles.js"
import Carousel from '../../components/carousel/Carousel';
import { parseISO, format } from 'date-fns';
import { Footer } from '../../components/templates/Footer';
import { ButtonLink } from '../../components/layout/ButtonLink';
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

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

    const applyStyleToHereLinks = (contentHtml) => {
        const pattern_here = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1+(>here<\/a>)/g;
        const link = /["'](.*?)["']/g;
        const pattern_h2 = /(?<=<h2>)(.*)(?=<\/h2>)/g;
        const pattern_h1 = /(?<=<h1>)(.*)(?=<\/h1>)/g;
        const pattern_list = /(?<=<li>)(.*)(?=<\/li>)/g;
        var item_num = 1;

        const styledContent = contentHtml.replace(pattern_here, a => {
            const html_link = a.match(link)[0];
            return (
                `<span class="hyperlink"><a href=${html_link}>here</a></span>`
            )
        }).replace(pattern_h2, h2 => {
            return isDarkMode ? (
                `⚪ <span class="italic_text">${h2}</span>`
            ) : (
                `⚫ <span class="italic_text">${h2}</span>`
            )
        }).replace(pattern_h1, h1 => {
            return isDarkMode ? (
                `▱▰▱ <span class="underline_text">${h1}</span> ▰▱▰`
            ) : (
                `▰▱▰ <span class="underline_text">${h1}</span> ▱▰▱`
            )
        }).replace(pattern_list, li => {
            return (
                `<span class="list_text">${item_num++}. ${li}</span>`
            )
        });
    
        return { __html: styledContent };
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
                <div className="w-full h-96">
                    <Carousel images={projectData.images.map((image) => `/images/${image}`)} imageAlts={projectData.alts} container_height="h-96"/>
                </div>
                <h3 className={`text-3xl font-semibold text-center mt-4`}>
                    {projectData.title}
                </h3>
                <div className={`text-l text-center mt-4 flex items-center justify-center space-x-1`}>
                    <div className={`${projectData.status == "COMPLETE." ? "text-green-600" : "text-red-600"}`}>
                        {projectData.status == "COMPLETE." ? "Completed:" : "Last modified:"}
                    </div>
                    <time className={"font-semibold"} dateTime={projectData.date}>{format(parseISO(projectData.date), 'LLLL d, yyyy')}</time>
                    {"."}
                </div>
                <div className={'text-2xl text-center mt-4 flex items-center justify-center space-x-1 text-red-600'}>
                    {projectData.status == "COMPLETE." ? "" : "This project is currently IN-PROGRESS."}
                </div>
                <hr className={`my-8 h-0.5 w-2/3 sm:w-1/2 border-t-0 ${isDarkMode ? "bg-white" : "bg-gray-900"} opacity-100 dark:opacity-50`} />

                <div className={`text-lg text-justify mt-4 flex items-center justify-center space-x-1`}>
                    {projectData.description}
                </div>

                <div className={`text-xl text-left mt-4 flex items-center justify-center space-x-1`}>
                {projectData.pdfLink === "N/A" ? ("") : (
                    <p>
                        Check out the official PDF for {projectData.title}
                        <EmbedPDF>
                            <a href={projectData.pdfLink}>
                                <div className={`text-center hover:underline ${isDarkMode ? 'text-blue-500' : 'text-blue-600'}`}>
                                    Click here.
                                </div>
                            </a>
                        </EmbedPDF>
                    </p>
                    )}
                </div>

                <div className={`text-lg text-left mt-4 flex items-center justify-center space-x-1`}>
                    <div dangerouslySetInnerHTML={applyStyleToHereLinks(projectData.contentHtml)} />
                </div>
            </article>



            <ButtonLink
                title=""
                button={
                <button>
                    <Link className="btn" href="/#projects">Return to projects.</Link>
                </button>
                }
            />
            <Footer isDarkMode={isDarkMode}/>

        </div>
    );
  }