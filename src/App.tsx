 import Navbar from "./navbar";
 import Hero_section from "./hero_section";
import { useState } from "react";
import Achievement from "./achievement";
import Project from "./project";
import Contact from "./contact";
import Animation from "./Animation";
function App() {
  const [heroActive,setHeroActive]=useState(true);
  const [contactActive,setContactActive]=useState(false);
 
  return (
    <>
      {contactActive&&<Contact contactActivation={()=>{setContactActive(false)}}/>}
      {heroActive&&<Hero_section setContactActivation={()=>{console.log("contact clicked");setContactActive(true)}}/>}
      <div className="flex gap-4">
         <Navbar options={[{name:"Home",link:"/"},{name:"About",link:"/about"},{name:"Contact",link:"/contact"},{name:"Project",link:"./project"}]} dropdownMenu={{option:"Services",options:[{name:"Web Development",link:"/services/web-development"},{name:"Mobile Development",link:"/services/mobile-development"}]}}/>
      </div>
      <Project/>
      <Animation /> 
      <Achievement />
      </>
  )
}
export default App
