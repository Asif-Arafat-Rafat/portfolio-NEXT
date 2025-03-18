 import Navbar from "./navbar";
 import Hero_section from "./hero_section";
import { useState } from "react";
import Achievement from "./achievement";
function App() {
  const [heroActive,setHeroActive]=useState(true);
 
  return (
    <>
      {heroActive&&<Hero_section/>}
      <div className="flex gap-4">
         <Navbar options={[{name:"Home",link:"/"},{name:"About",link:"/about"},{name:"Contact",link:"/contact"},{name:"Project",link:"./project"}]} dropdownMenu={{option:"Services",options:[{name:"Web Development",link:"/services/web-development"},{name:"Mobile Development",link:"/services/mobile-development"}]}}/>
      </div>
      <Achievement />

      </>
  )
}

export default App
