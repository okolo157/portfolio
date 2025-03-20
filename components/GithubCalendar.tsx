'use client'
import React, { useState, useEffect } from 'react';
import { fetchGithubStats } from "@/app/api/github/route";
import { FaCodeBranch, FaRegStar, FaBug } from "react-icons/fa";
import { VscGitCommit } from "react-icons/vsc";

const LOADING_MESSAGE = "Loading GitHub stats...";
const ERROR_PREFIX = "Error:";

const GitHubStats = ({ username }: { username: string }) => {
  const [stats, setStats] = useState<null | {
    commits: number,
    pullRequests: number,
    issues: number,
    stars: number,
  }>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAndSetStats = async (username: string) => {
    try {
      setLoading(true);
      setError(null);
      const fetchedStats = await fetchGithubStats(username);
      setStats(fetchedStats);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      fetchAndSetStats(username);
    }
  }, [username]);

  if (loading) return <div className="text-gray-500 text-center">{LOADING_MESSAGE}</div>;
  if (error) return <div className="text-red-500 text-center">{`${ERROR_PREFIX} ${error}`}</div>;

  return (
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Commits", value: stats?.commits, color: "bg-blue-500", Icon: VscGitCommit },
            { label: "Pull Requests", value: stats?.pullRequests, color: "bg-green-500", Icon: FaCodeBranch },
            { label: "Issues Opened", value: stats?.issues, color: "bg-yellow-500", Icon: FaBug },
            { label: "Stars", value: stats?.stars, color: "bg-purple-500", Icon: FaRegStar }
          ].map(({ label, value, color, Icon }, index) => (
              <div key={index} className={`p-4 text-white  ${color} transition-transform transform hover:scale-105`}>
                <div className="flex items-center space-x-3">
                  <Icon className="text-2xl" />
                  <div>
                    <p className="text-lg font-semibold">{value?.toLocaleString() || 0}</p>
                    <p className="text-sm">{label}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default GitHubStats;
