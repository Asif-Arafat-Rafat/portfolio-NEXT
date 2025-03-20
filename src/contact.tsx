import { FaLinkedin,FaWhatsapp,FaFacebook,FaFacebookMessenger  } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

import { SiFiverr,SiFreelancer } from "react-icons/si";

import { ImMail4 } from "react-icons/im";

function Contact({contactActivation}: {contactActivation: () => void}) {
    return(
        <>
        <div className="fixed inset-0 w-[100%] h-[100vh] bg-black/30 z-1 backdrop-blur-sm flex justify-center items-center" onClick={contactActivation}> 
            <div className="fixed w-100 h-120 bg-[var(--color-background)] rounded-3xl border-4 border-[var(--color-primary)] flex gap-5 " onClick={(e)=>{e.stopPropagation()}}>
                <FaLinkedin className="text-4xl text-blue-400 cursor-pointer" />
                <FaWhatsapp className="text-4xl text-green-400 cursor-pointer" />
                <FaFacebook className="text-4xl text-blue-400 cursor-pointer" />
                <ImMail4 className="text-4xl text-red-400 cursor-pointer" />
                <FaFacebookMessenger className="text-4xl text-blue-400 cursor-pointer" />
                <SiFiverr className="text-4xl text-[var(--color-background)] bg-green-400 rounded-[50%] cursor-pointer"/>
                <FaSquareUpwork className="text-4xl text-green-400  cursor-pointer"/>
                <SiFreelancer className="text-4xl text-blue-400 cursor-pointer"/>
            </div>
        </div>

        </>
    )
}export default Contact; 