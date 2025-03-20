const GITHUB_API_URL = "https://api.github.com/graphql";
const CACHE_TTL = 3600;

const GITHUB_STATS_QUERY = `
    query($username: String!) {
        user(login: $username) {
            contributionsCollection {
                totalCommitContributions
            }
            pullRequests {
                totalCount
            }
            issues {
                totalCount
            }
            starredRepositories {
                totalCount
            }
        }
    }
`;

// Helper functions
function validateEnvironment() {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    if (!token) {
        console.error("No GitHub token found!");
        throw new Error("GitHub token is required");
    }
    return token;
}

function parseGraphQLResponse(jsonResponse: { errors?: { message: string }[]; data?: { user?: { contributionsCollection?: { totalCommitContributions?: number }; pullRequests?: { totalCount?: number }; issues?: { totalCount?: number }; starredRepositories?: { totalCount?: number } } } }) {
    if (jsonResponse.errors) {
        throw new Error(jsonResponse.errors[0].message);
    }
    const user = jsonResponse?.data?.user || {};
    return {
        commits: user.contributionsCollection?.totalCommitContributions || 0,
        pullRequests: user.pullRequests?.totalCount || 0,
        issues: user.issues?.totalCount || 0,
        stars: user.starredRepositories?.totalCount || 0,
    };
}

// Main function
export async function fetchGithubStats(username: string) {
    if (!username) {
        throw new Error("Invalid GitHub username provided");
    }

    const GITHUB_TOKEN = validateEnvironment();

    const CACHE_KEY = `github-stats-${username}`;
    const cachedData = getCachedData(CACHE_KEY);
    if (cachedData) {
        return cachedData.value;
    }

    try {
        const response = await fetch(GITHUB_API_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: GITHUB_STATS_QUERY, variables: { username } }),
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.statusText}`);
        }

        const jsonResponse: { errors?: { message: string }[]; data?: { user?: { contributionsCollection?: { totalCommitContributions?: number }; pullRequests?: { totalCount?: number }; issues?: { totalCount?: number }; starredRepositories?: { totalCount?: number } } } } = await response.json();
        const stats = parseGraphQLResponse(jsonResponse);

        setCachedData(CACHE_KEY, stats, CACHE_TTL);
        return stats;
    } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        throw error;
    }
}


function setCachedData(key: string, value: object, ttl: number) {
    const item = { value, timestamp: Date.now(), ttl: ttl * 1000 };
    sessionStorage.setItem(key, JSON.stringify(item));
}

function getCachedData(key: string) {
    try {
        const item = sessionStorage.getItem(key);
        if (!item) return null;

        const parsedItem = JSON.parse(item);
        if (Date.now() - parsedItem.timestamp > parsedItem.ttl) {
            sessionStorage.removeItem(key);
            return null;
        }
        return parsedItem;
    } catch {
        return null;
    }
}

export function invalidateStatsCache(username: string) {
    sessionStorage.removeItem(`github-stats-${username}`);
}
