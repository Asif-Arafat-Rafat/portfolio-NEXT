import GitHubContributions from "./gitcontribution";
import { AnimatedTestimonials } from "./components/ui/animated-testimonials";

function Achievement() {
    return (
        <div className="max-w-[100vw] flex flex-col items-center justify-between mt-10">
          <div className="max-w-[90vw]   flex flex-col w-[90vw] items-center">
          <AnimatedTestimonials testimonials={[{name:"John Doe",quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.",designation:"CEO, ABC Company",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"},{name:"John Doe",quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.",designation:"CEO, ABC Company",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"},{name:"John Doe",quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.",designation:"CEO, ABC Company",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}]} autoplay/>

            <h2 className="text-2xl text-[var(--text-color)] font-bold mb-4">GitHub Contributions</h2>
            <GitHubContributions />
           </div>
         </div>
      );
    
}
export default Achievement;

