import { useEffect, useState } from "react";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME; // Change this to your GitHub username
const GITHUB_ACCESS_TOKEN = import.meta.env.VITE_GITHUB_ACCESS_TOKEN; // Use .env file for security
let i=0;
function gpday(dt:string,ind:number){
 
  if(dt=="01"){
    i=1;
  }
  if(dt!="01"&&ind%7==0){
    i=0;
  }
  if(dt<="07" && i==1){
    return true;
  }
  return false;

}
function GitHubContributions() {
  const [contributions, setContributions] = useState([]);
  interface ContributionDay {
    contributionCount: number;
    date: string;
  }
  
  interface ContributionWeek {
    contributionDays: ContributionDay[];
  }
  
  useEffect(() => {
    async function fetchContributions() {
      const query = `
        query {
          user(login: "${GITHUB_USERNAME}") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      if (data.data) {
        const contributionDays = data.data.user.contributionsCollection.contributionCalendar.weeks
          .flatMap((week:ContributionWeek) => week.contributionDays);
        setContributions(contributionDays);
      }
    }

    fetchContributions();
  }, []);
 
return (
  <div className="bg-[var(--contribution-table-background)] flex justify-center items-center p-6">
    <div className=" grid grid-rows-7 grid-flow-col gap-1.5">
      {contributions.map((day: ContributionDay, index) => (
  
        <div
          key={index} className={`w-3 h-3 rounded-sm ${( gpday(day.date.split("-")[2],index)?"ml-5":"")} `} style={{ backgroundColor: getColor(day.contributionCount),}}
          title={`${day.date}: ${day.contributionCount} contributions ${index}`}
        ></div>
      ))}
    </div>
  </div>
);
}

// Function to set different shades based on contribution count
function getColor(count: number) {
  if (count === 0) return "var(--contribution-background)";
  if (count > 0 && count < 5) return "var(--lowest-contribution)";
  if (count < 10) return "var(--medium-contribution)";
  if (count < 20) return "var(--high-contribution)";
  return "var(--highest-contribution)"; // Darkest
}
export default GitHubContributions;
