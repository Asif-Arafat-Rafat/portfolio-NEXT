import { useGSAP } from "@gsap/react";
import { gsap } from "gsap"
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Animation() {
    const gsapRef = useRef(null) 
    useGSAP(()=>{
        gsap.fromTo(gsapRef.current,{
            x:1000 
        },
        {
            scrollTrigger: {
                trigger: gsapRef.current, 
                start:"top 50%",
                scrub:true,// Element to trigger the scroll animation
                markers: true,   
                pin:true // Show markers for debugging
              },
                opacity: 1,   
              x: 0,          
              duration: 1,
                    }
        )
    })
 
    return(
        <>
        <div id="page" className="py-10 bg-[var(--color-background)]"> 
            <div ref={gsapRef} id="box" className="w-[100px] h-[100px] bg-blue-500">  </div>
        </div>
        </>
    ); 
}

export default Animation;