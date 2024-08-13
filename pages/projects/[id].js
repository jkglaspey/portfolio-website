import Link from 'next/link'
import { getAllProjectIds, getProjectData } from '../../lib/projects';
import Head from 'next/head';
import { useDarkMode } from '../../components/context/DarkModeProvider';
import { ParticleBackground } from "../../components/particles.js"
import Carousel from '../../components/carousel/Carousel';
import { parseISO, format } from 'date-fns';
import { Footer } from '../../components/templates/Footer';
import { ButtonLink } from '../../components/layout/ButtonLink';
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

    // Determine the status color based on project status
    const statusColor = projectData.status === "COMPLETE."
        ? "text-green-600"
        : projectData.status === "IN PROGRESS."
        ? "text-yellow-500"  // Gold color
        : "text-red-600";

    const statusText = projectData.status === "COMPLETE."
        ? "Completed:"
        : projectData.status === "IN PROGRESS."
        ? "In Progress:"
        : "Stopped:";

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
                    <div className={statusColor}>
                        {statusText}
                    </div>
                    <time className={"font-semibold"} dateTime={projectData.date}>{format(parseISO(projectData.date), 'LLLL d, yyyy')}</time>
                    {"."}
                </div>
                <div className={`text-2xl text-center mt-4 flex items-center justify-center space-x-1 ${statusColor}`}>
                    {projectData.status === "COMPLETE." ? "" : projectData.status === "IN PROGRESS." ? "This project is currently IN PROGRESS." : "This project is currently STOPPED."}
                </div>
                <hr className={`my-8 h-0.5 w-2/3 sm:w-1/2 border-t-0 ${isDarkMode ? "bg-white" : "bg-gray-900"} opacity-100 dark:opacity-50`} />

                <div className={`text-lg text-justify mt-4 flex items-center justify-center space-x-1`}>
                    {projectData.description}
                </div>
                
                {projectData.pdfPath === "N/A" ? ("") : (
                    <div className="flex flex-col items-center w-full">
                        {/* Title Section */}
                        <div className="text-xl text-left mt-4 mb-4 flex items-center justify-center w-full">
                            <p>Check out the official PDF for {projectData.title}</p>
                        </div>

                        {/* PDF Section */}
                        <div className="flex justify-center items-center w-full h-[calc(100vh-4rem)]">
                            <embed
                                src={projectData.pdfPath}
                                type="application/pdf"
                                className="w-full h-full"
                            ></embed>
                        </div>
                    </div>
                )}


                <div className={`text-lg text-left mt-4 flex items-center justify-center space-x-1`}>
                    <div dangerouslySetInnerHTML={applyStyleToHereLinks(projectData.contentHtml)} />
                </div>
                
                {projectData.extraPdf == 'N/A' && !Array.isArray(projectData.extraPdf) ? ("") : (
                    <p>
                        <Break type="oneEighth" />
                        <div className="text-xl flex justify-center items-center">
                            Extra Links.
                        </div>
                        <div className={`text-lg text-center mt-4`}>
                            {projectData.extraPdf.map((pdf, index) => {
                                const [pdfTitle, pdfPath] = pdf.split('|');
                                return (
                                    <div key={index}>
                                        Click to download <a href={pdfPath} download className="text-blue-500 underline">{pdfTitle}</a>.
                                    </div>
                                );
                            })}
                        </div>
                    </p>
                )}
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
