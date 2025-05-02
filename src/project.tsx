import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa"; 


function Projects() {
    return (
        <>
            <div className="mx-5 p-5 rounded-2xl shadow-lg mt-5 bg-[var(--color-primary)] font-bold overflow-hidden">
                <h1 className="font-normal text-3xl text-[var(--text-color)] ">Projects</h1>
                <div className="h-1 w-full bg-[var(--text-color)] my-2 mb-10"></div> {/* Better separator */}
                <div className="flex justify-evenly pb-5">
                    <div className="w-[450px] flex items-center justify-center  ">
                        <div className="w-[0.2px] h-100 bg-[var(--project-bar)] shadow-[0px_0px_40px_6px_var(--project-bar)] rounded-2xl flex overflow-visible justify-center items-center">
                            <div className="w-[500px] shadow-[0px_0px_40px_-20px_var(--project-bar)] h-[250px] rounded-xl bg-[var(--contribution-background)] flex-none border-4 border-[var(--color-primary)]"><img src="./src/assets/portfolioss.png" alt="Not found" className="w-full h-full"/></div>
                        </div>
                    </div>
                    <div className="w-170 h-100 bg-[var(--contribution-background)] rounded-2xl p-5 border-4 border-[var(--color-primary)] text-[var(--text-color)]">
                    <h1 className="font-light p-2 text-2xl underline">Portfolio</h1>
                    <p className="font-thin px-2 leading-[1.6]">A dynamic personal portfolio website designed to showcase my skills, projects, and achievements in an interactive and visually appealing way. Built with clean, responsive design principles, it features a custom project gallery, skill highlights, and contact integration. Every section was crafted to reflect my passion for coding, problem-solving, and continuous learning. Deployed with scalability and performance in mind, this portfolio serves as both a resume and a living record of my growth as a developer </p>
                    <div>
                        <p className="p-2 font-light text-2xl underline">Tools Used</p>
                        <div className="flex gap-2 justify-center items-center text-7xl">
                        <FaHtml5 className="text-orange-400"/> <SiTailwindcss className=" text-blue-400"/><FaReact className={` text-blue-400 animate-[spin_25s_linear_infinite]`} /><RiNextjsFill/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}
export default Projects;    