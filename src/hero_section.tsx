import { useTypewriter } from "react-simple-typewriter";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { BiLogoFlask } from "react-icons/bi";

const designations: string[] = [
  "a React Developer",
  "a Full Stack Developer",
  "a Web Developer",
  "an UI/UX Enthusiast",
];

function HeroSection() {
  const [designation] = useTypewriter({
    words: designations,
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
    delaySpeed: 1000,
  });

  
  return (
        <>
        <div className="h-[100vh] w-[100%] bg-[var(--color-background)] text-[var(--text-color)] flex items-center justify-evenly">
          <div className="w-150 text-center flex flex-col items-center">
            <div className="flex gap-5 text-3xl">
            <SiTailwindcss className=" text-blue-400"/><FaReact className={` text-blue-400 animate-[spin_25s_linear_infinite]`} /> <RiNextjsFill/> <FaHtml5 className="text-orange-400"/> <FaCss3Alt className="text-blue-400"/><FaPhp className=" text-purple-400"/><BiLogoFlask className=" text-purple-400"/>
          </div>

            <h1 className="text-5xl  ">Hi,I'm Asif Arafat <br /> I am <span className="text-blue-400">{designation}</span> </h1>
          <button className="mt-10 py-5 px-10 bg-[var(--button1)] rounded-4xl border-1 text-white hover:bg-[var(--button1-hover)]">Contact Me </button>
          </div>
          <div className="w-110 h-110 bg-blue-100 rounded-[50%] flex items-center justify-center">
            <div className="w-105 h-105 bg-blue-400 rounded-[50%]"></div>
          </div>
         </div>
        </>
  );
}

export default HeroSection;
