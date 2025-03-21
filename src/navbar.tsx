import { useEffect, useState } from "react"
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

type clickableLink={
    name:string,
    link?:string 
}
type dropdownMenu={
    option:string,
    options:clickableLink[] 
}
interface navbarMenu{
    options :clickableLink[],
    dropdownMenu?:dropdownMenu 
}
function Navbar(menu:navbarMenu){ 
const [theme,setTheme]=useState("dark");
useEffect(()=>{
    document.documentElement.className=theme;
},[theme])
const [dropdown,setDropdown]=useState(false);
return<>
    <div className="px-5 sticky w-[100%] flex justify-between py-3 bg-[var(--color-background)] text-[var(--text-color)] shadow-xl">
        <div className="text-4xl font-serif text-[var(--text-color)]">Asif Arafat</div>
        <div className="flex justify-center gap-5">
            {menu.options.map((option)=>{
                return <div className="py-2"><a className="p-2 border-0 outline-0 hover:bg-[var(--menu-item-hover)]" href= {option.link} >{option.name}</a></div>
            })}
            {menu.dropdownMenu && <div className="relatve">
                <button className="p-2 hover:bg-[var(--menu-item-hover)]" onClick={()=>{dropdown?setDropdown(false):setDropdown(true)}}>{menu.dropdownMenu.option}</button>
                <div className={` absolute ${dropdown?"":"hidden"} overflow-hidden bg-[var(--color-background)] text-[var(--text-color)] rounded-3xl border-1 border-black`}>
                    {menu.dropdownMenu.options.map((option)=>{
                        return <div className=" p-2 w-55 hover:bg-amber-200 transition-colors duration-150 border-1 text-center"><a href={option.link}>{option.name}</a></div>
                    })}
                </div>
            </div>}
        </div>
        <div className="flex gap-2">
            <button className="py-2 px-5 bg-[var(--button1)] rounded-3xl border-1 text-white hover:bg-[var(--button1-hover)]">Contact Me</button>
            <button onClick={()=>{theme==="dark"?setTheme("light"):setTheme("dark")}} className=" text-4xl ml-2 rounded-3xl text-[var(--button1)] hover:text-[var(--button1-hover)]"> {theme==="dark" && <MdSunny />}{theme==="light" && <IoMdMoon />} </button>
        </div>
    </div>
</>   
}
export default Navbar;