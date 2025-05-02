import GitHubContributions from "./gitcontribution";
// import { AnimatedTestimonials } from "./components/ui/animated-testimonials";

function Achievement() {
    return (
        <div className="max-w-[100vw] flex flex-col items-center justify-between mt-5">
          <div className="flex flex-col items-center">
          {/* <AnimatedTestimonials testimonials={[{name:"John Doe",quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.",designation:"CEO, ABC Company",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"},{name:"John Doe",quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.",designation:"CEO, ABC Company",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"},{name:"John Doe",quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.",designation:"CEO, ABC Company",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}]} autoplay/> */}
            <div  className="px-15 py-5 bg-[var(--color-primary)] rounded-lg shadow-md">
              <h2 className="text-2xl text-[var(--text-color)] font-bold mb-4">GitHub Contributions</h2>
              <GitHubContributions />
            </div>
           </div>
         </div>
      );
    
}
export default Achievement;

