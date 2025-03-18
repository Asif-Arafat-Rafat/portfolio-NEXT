import GitHubContributions from "./gitcontribution";
function Achievement() {
    return (
        <div className="max-w-[100vw] flex flex-col items-center justify-between ">
          <div className="max-w-[90vw]   flex flex-col w-[90vw] items-center">
            <h2 className="text-2xl text-[var(--text-color)] font-bold mb-4">GitHub Contributions</h2>
            <GitHubContributions />
           </div>
         </div>
      );
    
}
export default Achievement;

