import {
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaFacebookMessenger,
  FaTelegram,
} from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

import { SiFiverr, SiFreelancer } from "react-icons/si";

import { ImMail4 } from "react-icons/im";

function Contact({ contactActivation }: { contactActivation: () => void }) {
  return (
    <>
      <div
        className="fixed inset-0 w-[100%] h-[100vh] bg-black/30 z-1 backdrop-blur-sm flex justify-center items-center"
        onClick={contactActivation}
      >
        <div
          className="fixed w-100 h-120 bg-[var(--color-background)] rounded-3xl border-4 border-[var(--color-primary)] flex flex-wrap gap-5 pt-5 px-5 justify-center items-center"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/* <div className="flex flex-wrap gap-5 group items-center justify-center pt-5">
                    <FaLinkedin className="group hover:scale-200 group-hover:scale-80 transition-all duration-500 text-4xl text-blue-400 cursor-pointer" />
                    <FaWhatsapp className="group hover:scale-200 group-hover:scale-80 transition-all duration-500 text-4xl text-green-400 cursor-pointer" />
                    <FaFacebook className="group hover:scale-200 group-hover:scale-80 transition-all duration-500 text-4xl text-blue-400 cursor-pointer" />
                    <ImMail4 className="group hover:scale-200 group-hover:scale-80 transition-all duration-500 text-4xl text-red-400 cursor-pointer" />
                    <FaFacebookMessenger className="group hover:scale-200 group-hover:scale-80 transition-all duration-500 text-4xl text-blue-400 cursor-pointer" />
                    <SiFiverr className="group hover:scale-200 group-hover:scale-80 transition-all duration-500 text-4xl text-[var(--color-background)] bg-green-400 rounded-[50%] cursor-pointer"/>
                    <FaSquareUpwork className="group hover:scale-200 group-hover:scale-80 transition-all duration-500 text-4xl text-green-400  cursor-pointer"/>
                    <SiFreelancer className="group hover:scale-200 group-hover:scale-80 transition-all duration-500 text-4xl text-blue-400 cursor-pointer"/>
                    <FaTelegram className="group hover:scale-200 group-hover:scale-80 transition-all duration-500 text-4xl text-blue-400 cursor-pointer" />
                </div> */}
          <div className="flex flex-col gap-6 w-full">
            <div className="group hover:scale-[105%] transition-all duration-300">
              <a
                href="https://www.linkedin.com/in/asif-arafat-rafat/"
                className="flex items-center justify-center text-xl gap-3 text-[var(--text-color)] bg-[var(--color-primary)] p-4 rounded-lg shadow-md hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
            
              >
                <FaLinkedin className="text-3xl text-blue-400" />
                Connect on LinkedIn
              </a>
            </div>

            <div className="group hover:scale-[105%] transition-all duration-300">
              <a href="wa.me/8801840150076" className="flex items-center justify-center text-xl gap-3 text-[var(--text-color)] bg-[var(--color-primary)] p-4 rounded-lg shadow-md hover:bg-green-600">
                <FaWhatsapp className="text-3xl text-green-400" />
                Message on WhatsApp
            </a>
            </div>
            <div className="group hover:scale-[105%] transition-all duration-300">
              <a href="mailto:asif.arafat.rafat@gmail.com" className="flex items-center justify-center text-xl gap-3 text-[var(--text-color)] bg-[var(--color-primary)] p-4 rounded-lg shadow-md hover:bg-red-600"><ImMail4 className="text-3xl text-red-400" />Send an Email</a>
            </div>
            <div className="group hover:scale-[105%] transition-all duration-300">
              <a href="https://www.fiverr.com/asif_arafat_rafat" className="flex items-center justify-center text-xl gap-3 text-[var(--text-color)] bg-[var(--color-primary)] p-4 rounded-lg shadow-md hover:bg-green-600">
                <SiFiverr className="text-3xl text-[var(--color-background)] bg-green-400 rounded-[50%] " />
                Visit my Fiverr
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
