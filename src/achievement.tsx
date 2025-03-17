import GitHubContributions from "./gitcontribution";
function Achievement() {
    return (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-[var(--text-color)] font-bold mb-4">GitHub Contributions</h2>
          <GitHubContributions />
         </div>
      );
    
}
export default Achievement;

