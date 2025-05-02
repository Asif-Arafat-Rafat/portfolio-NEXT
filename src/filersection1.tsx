import {FlipWords} from "./components/ui/flip-words";
function Filersection1(){
     return(
        <div className="mx-5 py-15 rounded-2xl shadow-lg mt-5 bg-[var(--color-primary)] font-light overflow-hidden">
            <h1 className="text-2xl text-center font-light text-white">
                Build Your
                <FlipWords words={["React","Nextjs","PHP","Flask"]} className="text-2xl text-center font-bold text-white" /> <br />
                Site Fast ,Easy and the Best price.
            </h1>
        </div>
    )
}
export default Filersection1;