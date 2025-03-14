import { useEffect, useState } from "react"

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
const [theme,setTheme]=useState("light");
useEffect(()=>{
    document.documentElement.className=theme;
},[theme])
const [dropdown,setDropdown]=useState(false);
return<>
    <div className="px-5 sticky w-[100%] flex justify-between py-3 bg-[var(--color-background)] text-[var(--text-color)] shadow-xl">
        <div className="text-4xl font-serif bg-[var(--color-background)] text-[var(--text-color)]">Asif Arafat</div>
        <div className="flex justify-center gap-5">
            {menu.options.map((option)=>{
                return <div className="py-2"><a className="p-2 border-0 outline-0 hover:bg-[#e6e6e6]" href= {option.link} >{option.name}</a></div>
            })}
            {menu.dropdownMenu && <div className="relatve">
                <button className="p-2 hover:bg-[#e6e6e6]" onClick={()=>{dropdown?setDropdown(false):setDropdown(true)}}>{menu.dropdownMenu.option}</button>
                <div className={` absolute ${dropdown?"":"hidden"} overflow-hidden bg-[var(--color-background)] text-[var(--text-color)] rounded-3xl border-1 border-black`}>
                    {menu.dropdownMenu.options.map((option)=>{
                        return <div className=" p-2 w-55 hover:bg-amber-200 transition-colors duration-150 border-1 text-center"><a href={option.link}>{option.name}</a></div>
                    })}
                </div>
            </div>}
        </div>
        <div className="flex gap-2">
            <button className="py-2 px-5 bg-blue-500 rounded-3xl border-1 text-white hover:bg-white hover:text-blue-500 hover:border-1 hover:border-blue-500">Contact Me</button>
            <button onClick={()=>{theme==="dark"?setTheme("light"):setTheme("dark")}} className="py-2 px-4 bg-blue-500 rounded-3xl border-1 text-white hover:bg-white hover:text-blue-500 hover:border-1 hover:border-blue-500">T</button>
        </div>
    </div>
</>   
}
export default Navbar;