import { useEffect, useState } from "react";

const GITHUB_USERNAME = "Asif-Arafat-Rafat"; // Change this to your GitHub username
const GITHUB_ACCESS_TOKEN = "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"; // Keep it secret! Use environment variables in production.

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
  <div className="flex justify-center items-center p-6">
    <div className="grid grid-rows-7 grid-flow-col gap-1.5">
      {contributions.map((day: ContributionDay, index) => (
        <div
          key={index}
          className="w-4 h-4 rounded-sm bg-[var(--color-primary)]"
          style={{
            backgroundColor: getColor(day.contributionCount),
          }}
          title={`${day.date}: ${day.contributionCount} contributions`}
        ></div>
      ))}
    </div>
  </div>
);
}

// Function to set different shades based on contribution count
function getColor(count: number) {
  if (count === 0) return "";
  if (count > 0 && count < 5) return "#9be9a8";
  if (count < 10) return "#40c463";
  if (count < 20) return "#30a14e";
  return "#216e39"; // Darkest
}
export default GitHubContributions;
