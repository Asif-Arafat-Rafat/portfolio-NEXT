import Message from "./message"
import ListOrder from "./ListOrder"
import Navbar from "./navbar";
function App() {
  function handleSelectItem(category:string,item:string){
    console.log(category+" Selected "+item);
  }
  return (
    <>
       <div className="flex gap-4">
      <Navbar options={[{name:"Home",link:"/"},{name:"About",link:"/about"},{name:"Contact",link:"/contact"},{name:"Project",link:"./project"}]} dropdownMenu={{option:"Services",options:[{name:"Web Development",link:"/services/web-development"},{name:"Mobile Development",link:"/services/mobile-development"}]}}/>
      </div>
      </>
  )
}

export default App
