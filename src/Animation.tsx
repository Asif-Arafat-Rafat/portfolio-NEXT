import { useGSAP } from "@gsap/react";
import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Animation() {
    const [width, setWidth] = useState(window.innerWidth);
    const [stringY, setstringY] = useState(100);
    const [stringX, setstringX] = useState(width/2);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        
        // Cleanup listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
        
    }, []);
    const handlestring=(event:any)=>{
        console.log(event.clientY)
        console.log(event.clientX)
        setstringY(event.clientY)
        setstringX(event.clientX)
        gsap.to("svg path",{
            attr:{d:`M 10 100 Q ${stringX} ${stringY} ${width} 100`},
            delay:1,
            duration:1,
        })
        gsap.to("svg path",{
            attr:{d:`M 10 100 Q 0 100 ${width} 100`},
            duration:1,
        })
    }

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
            {/* <svg width={width} height={200}>
                <path d={`M 10 100 Q ${stringX} ${stringY} ${width} 100`} onMouseEnter={handlestring} stroke="var(--text-color)" fill="none"/>
            </svg> */}
        </div>
        </>
    ); 
}

export default Animation;